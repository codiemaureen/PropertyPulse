import PropertyCard from '../components/PropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import Pagination from '../components/Pagination';

const PropertiesPage = async (props) => {
  const searchParams = await props.searchParams || {};
  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = parseInt(searchParams.pageSize || '9', 10);

  await connectDB();
  const skip = (page - 1)* pageSize;
  const total = await Property.countDocuments({}); 
  const properties = await Property.find({}).skip(skip).limit(pageSize);

  const showPagination = total > pageSize;

  return ( 
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        { properties.length === 0 ? (<p>no properties found</p>) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {properties.map((property) => (
          <div key={property._id}><PropertyCard property={property}/></div>
          ))}
        </div>
        )}
        {showPagination && (
          <Pagination page={page} pageSize={pageSize} totalItems={total}/>
        )}
      </div>
    </section>
  );
}

export default PropertiesPage;