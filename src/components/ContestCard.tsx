import { BlockStack, Card, Text } from '@shopify/polaris';
import type { IContestCardProps } from '../types/ContestCard';
import formatDate from '../utils/formatDate';

const ContestCard = ({ id, name, type, phase, frozen, durationSeconds, startTimeSeconds, relativeTimeSeconds }: IContestCardProps) => {
  console.log(id, name, type, phase, frozen, durationSeconds, startTimeSeconds, relativeTimeSeconds);
  return (
    <div className='p-2'>
      <Card background="bg-surface-secondary">
        <BlockStack gap="300">
          <Text as="h2" variant="headingLg" fontWeight="medium">
            {name}
          </Text>

          <div className='flex justify-start items-center gap-4'>
            <div className='flex items-center justify-center gap-1'>
              <Text as="h3" variant="headingSm" fontWeight="medium">
                Type:
              </Text>
              <Text as="p" variant="bodyMd" fontWeight="medium">
                {type}
              </Text>
            </div>

            <div className='flex items-center justify-center gap-1'>
              <Text as="h3" variant="headingSm" fontWeight="medium">
                Start:
              </Text>
              <Text as="p" variant="bodyMd" fontWeight="medium">
                {formatDate(startTimeSeconds)}
              </Text>
            </div>
          </div>
        </BlockStack>
      </Card>
    </div>
  );
}

export default ContestCard;