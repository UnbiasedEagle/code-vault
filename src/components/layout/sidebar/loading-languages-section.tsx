import { Skeleton } from '@/components/ui/skeleton';

export const LoadingLanguagesSection = () => {
  return (
    <div className='space-y-3'>
      <span className='text-xs font-semibold text-muted-foreground px-2 uppercase tracking-wider'>
        Languages
      </span>
      <ul className='flex flex-col space-y-1'>
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index}>
            <div className='flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md'>
              <Skeleton className='h-5 w-20' />
              <Skeleton className='flex items-center justify-center h-5 min-w-[20px] px-2 rounded-full' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
