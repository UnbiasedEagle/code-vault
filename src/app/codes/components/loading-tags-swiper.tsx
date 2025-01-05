import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const LoadingTagsSwiper = () => {
  return (
    <Card>
      <CardContent className='p-4'>
        <Skeleton className='w-full h-10' />
      </CardContent>
    </Card>
  );
};
