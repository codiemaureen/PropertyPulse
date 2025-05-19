import connectDB from '@/config/database';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions =  {
 providers: [
  GoogleProvider({
   clientId: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
   authorization: {
    params: {
     prompt: 'consent',
     access_type: 'offline',
     response_type: 'code'
    }
   }
  })
 ],
 callbacks: {
  // invoked on successful login
  async signIn({ profile }){
   await connectDB();

  },
  // session callback fn
  async session({session}){

  }
 }
}