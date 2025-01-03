import {
  ResourceList,
} from '@shopify/polaris';
import { IContestCardProps } from '../types/ContestCard';
import ContestCard from './ContestCard';

const ContestList = ({ contests }: { contests: IContestCardProps[] }) => {
  return (
    <div className='flex justify-center items-center bg-white p-6 rounded-md shadow-md'>
      <ResourceList
        resourceName={{ singular: 'customer', plural: 'customers' }}
        items={contests}
        pagination={{

          hasNext: true,
          onNext: () => { },
        }}
        renderItem={ContestCard}
      />
    </div>
  );
}

export default ContestList;