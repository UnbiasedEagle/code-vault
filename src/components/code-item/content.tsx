'use client';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { CardContent } from '../ui/card';

interface CodeItemContentProps {
  showCode: boolean;
  badges: string[];
  codeString: string;
  description: string;
}

export const CodeItemContent = ({
  showCode,
  badges,
  codeString,
  description,
}: CodeItemContentProps) => {
  const { theme } = useTheme();

  return (
    <CardContent
      className={cn('flex flex-col gap-4 px-4', {
        hidden: !showCode,
      })}
    >
      <ul className='flex gap-2 overflow-hidden overflow-x-auto scrollbar-hide'>
        {badges.map((badge, index) => (
          <li key={index}>
            <Badge variant='secondary'>{badge}</Badge>
          </li>
        ))}
      </ul>
      <p>{description}</p>
      <SyntaxHighlighter
        wrapLongLines
        language='javascript'
        style={theme === 'dark' ? monokai : docco}
      >
        {codeString}
      </SyntaxHighlighter>
    </CardContent>
  );
};
