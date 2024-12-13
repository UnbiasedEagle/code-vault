'use client';

import { useEditCode } from '@/stores/use-edit-code';
import { Card, CardContent } from './ui/card';
import { useEffect, useState } from 'react';
import { Code } from '@prisma/client';
import { FaHashtag } from 'react-icons/fa';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { FaFileAlt } from 'react-icons/fa';
import { Textarea } from './ui/textarea';
import { IoMdPricetags } from 'react-icons/io';
import { MultiSelect } from './ui/multi-select';
import { Cat, Dog, Fish, Rabbit, Turtle } from 'lucide-react';
import { Button } from './ui/button';
import { AiOutlineClose } from 'react-icons/ai';
import { useCreateCode } from '@/stores/use-create-code';
import { useShowCode } from '@/stores/use-show-code';

const frameworksList = [
  { value: 'react', label: 'React', icon: Turtle },
  { value: 'angular', label: 'Angular', icon: Cat },
  { value: 'vue', label: 'Vue', icon: Dog },
  { value: 'svelte', label: 'Svelte', icon: Rabbit },
  { value: 'ember', label: 'Ember', icon: Fish },
];

export const CodeForm = () => {
  const editCode = useEditCode();
  const setShowNewCode = useCreateCode((state) => state.setShowNewCode);
  const setSelectedCode = useShowCode((state) => state.setSelectedCode);

  const [code, setCode] = useState<Code | null>(null);

  useEffect(() => {
    if (editCode.selectedCode) {
      setCode(editCode.selectedCode);
    } else {
      setCode(null);
    }
  }, [editCode.selectedCode]);

  return (
    <Card className='h-[660px] overflow-y-auto'>
      <CardContent className='p-4'>
        <div className='flex justify-end mb-4'>
          <Button
            onClick={() => {
              setSelectedCode(null);
              editCode.setSelectedCode(null);
              setShowNewCode(false);
            }}
            variant='ghost'
          >
            <AiOutlineClose />
          </Button>
        </div>
        <form className='flex flex-col space-y-8'>
          <div className='flex items-center gap-2'>
            <Label htmlFor='title'>
              <FaHashtag size={16} />
            </Label>
            <Input
              placeholder='New Title...'
              autoFocus
              className='placeholder:font-bold font-bold'
            />
          </div>
          <div className='flex items-start gap-2'>
            <Label htmlFor='tags'>
              <IoMdPricetags className='mt-1' size={16} />
            </Label>
            <MultiSelect
              placeholder='Select Tags...'
              options={frameworksList}
              onValueChange={() => {}}
            />
          </div>
          <div className='flex items-start gap-2'>
            <Label htmlFor='description'>
              <FaFileAlt className='mt-1' size={16} />
            </Label>
            <Textarea placeholder='New Description...' />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
