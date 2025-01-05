import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const LoadingCodes = () => {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <ul className='grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index}>
            <Card className='max-h-[700px] lg:max-h-max overflow-y-auto'>
              <CardHeader className='p-4 flex flex-col gap-2'>
                <Skeleton className='h-[28px] w-full' />
                <Skeleton className='w-28 h-5' />
              </CardHeader>
              <CardFooter className='flex border-t px-4 py-2 items-center justify-between'>
                <Skeleton className='w-20 h-5' />
                <Skeleton className='w-12 h-10' />
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
