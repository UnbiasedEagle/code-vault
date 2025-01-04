import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export const SearchBar = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (value) {
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.set('q', value);
      router.push(`/codes?${currentParams.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='relative flex-1'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <Search className='h-4 w-4 text-muted-foreground' />
      </div>
      <Input
        ref={inputRef}
        placeholder='Search codes...'
        className='h-9 pl-9 bg-muted/50'
      />
    </form>
  );
};
