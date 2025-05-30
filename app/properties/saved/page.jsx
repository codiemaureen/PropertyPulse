import PropertyCard from "@/app/components/PropertyCard";
import connectDB from "@/config/database";
import User from "@/models/Users";
import { getSessionUser } from "@/utils/getSessionUser";


const SavedPropertiesPage = async({property}) => {
 await connectDB();

 const {userId} = await getSessionUser();

 if(!userId){
  throw new Error('User must be logged in to view saved properties')
 }

 const {bookmarks} = await User.findById(userId).populate('bookmarks');
 
 return ( 
  <section className="px-4 py-6">
   <div className="container lg:container m-auto px-4 py-6">
    <h1 className="text-2xl mb-4">Saved Properties</h1>
    {bookmarks.length === 0 ? ('no saved properties'): 
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {bookmarks.map((property, i) => (
       <PropertyCard key={property._id} property={property}  />
      ))}
     </div>
     }
   </div>
  </section>
  )
}
 
export default SavedPropertiesPage;