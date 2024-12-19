import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { IoMdPricetags } from 'react-icons/io';

export const TagsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className='w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all'>
        <IoMdPricetags size={18} />
        <span>Tags</span>
      </DialogTrigger>
    </Dialog>
  );
};
