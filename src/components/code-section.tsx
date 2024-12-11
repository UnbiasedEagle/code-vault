'use client';

import { useEditCode } from '@/stores/use-edit-code';
import { Card, CardContent } from './ui/card';
import { useEffect, useState } from 'react';
import { Code } from '@prisma/client';

export const CodeSection = () => {
  const selectedCode = useEditCode((state) => state.selectedCode);

  const [code, setCode] = useState<Code | null>(null);

  useEffect(() => {
    if (selectedCode) {
      setCode(selectedCode);
    } else {
      setCode(null);
    }
  }, [selectedCode]);

  return (
    <Card className='h-[660px] overflow-y-auto'>
      <CardContent className='p-4'>
        <h2>Code Section</h2>
      </CardContent>
    </Card>
  );
};
