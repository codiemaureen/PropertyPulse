import PropertyCard from "@/app/components/PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";

const SearchResults = async ({ searchParams }) => {
 let { location, propertyType } = await searchParams;
 await connectDB();

 const locationPattern = new RegExp(location, 'i');

 let query = {
  $or: [
   {name: locationPattern},
   {description: locationPattern},
   {'location.street': locationPattern},
   {'location.city': locationPattern},
   {'location.state': locationPattern},
   {'location.zipcode': locationPattern}
  ]
 }

 if(propertyType && propertyType != 'All'){
  const typePattern = new RegExp(propertyType, 'i');
  query.type = typePattern;
 }

 const propertiesQueryResults = await Property.find(query).lean();
 const properties = convertToSerializableObject(propertiesQueryResults);
 
 
 return ( 
 <>
  {properties.map((property) => (
   <PropertyCard key={property._id} property={property} />
  ))}
 </> );
}
 
export default SearchResults;