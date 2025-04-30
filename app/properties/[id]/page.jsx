'use client';
import { useRouter } from "next/navigation";


const PropertyPage = () => {
 const router = useRouter();

 return ( <div>
  <h1>Property Page</h1>
  <button onClick={() => router.replace('/')}>Go Home</button>
 </div> );
}
 
export default PropertyPage;