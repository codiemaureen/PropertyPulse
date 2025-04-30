'use client';
import { useRouter, useParams, useSearchParams } from "next/navigation";


const PropertyPage = () => {
 const router = useRouter();
 const params = useParams();
 const searchParams = useSearchParams();

 return ( <div>
  <h1>Property Page {params.id}</h1>
  <p>{searchParams.get('name')}</p>
  <button onClick={() => router.replace('/')}>Go Home</button>
 </div> );
}
 
export default PropertyPage;