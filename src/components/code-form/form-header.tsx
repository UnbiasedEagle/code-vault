'use client';

import { Button } from '../ui/button';
import { AiOutlineClose } from 'react-icons/ai';

interface FormHeaderProps {
  isEditing: boolean;
  onClose: () => void;
}

export const FormHeader = ({ isEditing, onClose }: FormHeaderProps) => {
  return (
    <div className='border-b mb-6'>
      <div className='flex items-start justify-between py-4'>
        <div className='space-y-1'>
          <h2 className='text-xl font-semibold tracking-tight'>
            {isEditing ? 'Edit Code' : 'Add New Code'}
          </h2>
          <p className='text-sm text-muted-foreground'>
            {isEditing
              ? 'Update your code snippet details'
              : 'Add a new code snippet to your collection'}
          </p>
        </div>
        <Button
          onClick={onClose}
          variant='ghost'
          className='hover:bg-secondary'
        >
          <AiOutlineClose className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
};
