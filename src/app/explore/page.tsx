import DestinationCard from '@/components/layout/Home/DestinationCard';
import { destinationsData } from '../../../public/data/destinations'

type Activity = {
  id:string,
  title : string,
  cost: number
}
interface DestinationType{
  id: string,
    title: string,
    location: string,
    category: string,
    image: string,
    rating: number,
    estimatedDailyCost: number,
    description: string,
    suggestedActivities: Activity[]

}

const ExplorePage = () => {

    const featured = destinationsData
    return (
        <div className='bg-[#000000]'>
 <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-4 py-10 '>
          {
            featured.map((destination: DestinationType) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))
          }

        </div>
        </div>

    );
};

export default ExplorePage;