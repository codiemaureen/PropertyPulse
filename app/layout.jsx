import '../assets/styles/globals.css';
import AuthProvider from './components/AuthProvider';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from '@/context/GlobalContext';
import 'photoswipe/dist/photoswipe.css';


export const metadata = {
 title: 'Realty Drift',
 keywords: 'rental, property, real estate',
 description: 'find the perfect rental property'
}

const MainLayout = ({children}) => {
 return (

  <AuthProvider>
   <GlobalProvider>
    <html>
     <body className='bg-blue-300'>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
     </body>
    </html> 
   </GlobalProvider>
  </AuthProvider> 
 );
}
 
export default MainLayout;