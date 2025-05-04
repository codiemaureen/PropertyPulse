import '../assets/styles/globals.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


export const metadata = {
 title: 'Property Pulse',
 keywords: 'rental, property, real estate',
 description: 'find the perfect rental property'
}

const MainLayout = ({children}) => {
 return (<html>
  <body className='bg-blue-300'>
   <main>
    <NavBar />
    {children}
   </main>
   <Footer />
  </body>
 </html>  );
}
 
export default MainLayout;