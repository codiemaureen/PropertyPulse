'use client';
import { useRouter, useParams } from "next/navigation";


const PropertyPage = () => {
 const router = useRouter();
 const params = useParams();

 return ( <div>
  <h1>Property Page {params.id}</h1>
  <button onClick={() => router.replace('/')}>Go Home</button>
 </div> );
}
 
export default PropertyPage;