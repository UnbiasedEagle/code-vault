import { CreateTagBtn } from '@/app/codes/components/create-tag-btn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { SimpleTag } from '@/types';
import { Edit, Search } from 'lucide-react';
import { useState } from 'react';
import { IoMdPricetags } from 'react-icons/io';
import { MdRadioButtonChecked } from 'react-icons/md';
import { DeleteTagDialog } from './delete-tag-dialog';

interface TagsDialogProps {
  tags: SimpleTag[];
}

export const TagsDialog = ({ tags }: TagsDialogProps) => {
  const [input, setInput] = useState('');

  const filteredTags = tags.filter((tag) => {
    return tag.name.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <Dialog>
      <DialogTrigger className='w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all'>
        <IoMdPricetags size={18} />
        <span>Tags</span>
      </DialogTrigger>
      <DialogContent className='w-[90%] rounded-lg'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <span>
              <IoMdPricetags size={18} />
            </span>
            <span>Manage Tags</span>
          </DialogTitle>
        </DialogHeader>
        <div className='flex items-center gap-2 mt-2'>
          <div className='relative flex-1'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Search className='h-4 w-4 text-muted-foreground' />
            </div>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Search tags...'
              className='h-9 pl-9 bg-muted/50'
            />
          </div>
          <CreateTagBtn />
        </div>
        <div className='max-h-72 overflow-y-auto flex flex-col gap-2 mt-2 p-1'>
          {filteredTags.map((tag) => (
            <Card key={tag.id}>
              <CardContent className='p-2'>
                <div className='flex items-center gap-4 justify-between'>
                  <div className='flex items-center gap-2'>
                    <div>
                      <MdRadioButtonChecked
                        className='text-primary'
                        size={16}
                      />
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex items-center gap-1'>
                        <span className='text-base font-semibold text-foreground'>
                          {tag.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Button variant='secondary' size='icon' className='h-8 w-8'>
                      <Edit className='h-4 w-4' />
                      <span className='sr-only'>Edit</span>
                    </Button>
                    <DeleteTagDialog tagId={tag.id} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
