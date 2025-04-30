'use client';
import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";


const PropertyPage = () => {
 const router = useRouter();
 const params = useParams();
 const searchParams = useSearchParams();
 const pathname = usePathname();

 return ( <div>
  <h1>Property Page {params.id}</h1>
  <p>{searchParams.get('name')}</p>
  <p>{pathname}</p>
  <button onClick={() => router.replace('/')}>Go Home</button>
 </div> );
}
 
export default PropertyPage;