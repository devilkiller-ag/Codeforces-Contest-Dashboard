import { Spinner } from '@shopify/polaris';

const Loading = () => {
  return <div className='flex justify-center items-center gap-2'>
    <h1 className='text-lg'>Loading</h1>
    <Spinner accessibilityLabel="Spinner" size="small" />
  </div>
};


export default Loading;