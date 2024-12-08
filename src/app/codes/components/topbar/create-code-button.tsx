import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export const CreateCodeButton = () => {
  return (
    <Button variant='default' size='sm' className='h-9 flex items-center gap-1'>
      <Plus className='h-4 w-4' />
      Code
    </Button>
  );
};
