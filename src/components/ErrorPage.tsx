import { Icon } from '@shopify/polaris';
import { SmileySadIcon } from '@shopify/polaris-icons';

const ErrorComponent = ({ message }: { message?: string }) => {
  return <div className='flex justify-center items-center gap-2'>
    <Icon source={SmileySadIcon} tone="base" />
    <h1 className='text-base'>{message ? message : 'Something went wrong!'}</h1>
  </div>
};

export default ErrorComponent;