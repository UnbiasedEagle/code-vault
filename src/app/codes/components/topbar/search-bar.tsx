import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className='relative flex-1'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <Search className='h-4 w-4 text-muted-foreground' />
      </div>
      <Input
        placeholder='Search codes...'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='h-9 pl-9 bg-muted/50'
      />
    </div>
  );
};
