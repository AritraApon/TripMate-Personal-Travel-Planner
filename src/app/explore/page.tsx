import DestinationCard from '@/components/layout/Home/DestinationCard';
import { destinationsData } from '../../../public/data/destinations'

const ExplorePage = () => {

    const featured = destinationsData
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-4 my-10 '>
          {
            featured.map((destination:any) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))
          }

        </div>
    );
};

export default ExplorePage;