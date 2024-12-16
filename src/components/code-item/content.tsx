import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { CardContent } from '../ui/card';
import { SimpleTag } from '@/types';

interface CodeItemContentProps {
  showCode: boolean;
  badges: SimpleTag[];
  codeString: string;
  description: string;
}

export const CodeItemContent = ({
  showCode,
  badges,
  codeString,
  description,
}: CodeItemContentProps) => {
  return (
    <CardContent
      className={cn('flex flex-col gap-4 px-4', {
        hidden: !showCode,
      })}
    >
      <ul className='flex gap-2 overflow-hidden overflow-x-auto scrollbar-hide'>
        {badges.map((badge, index) => (
          <li key={index}>
            <Badge variant='secondary'>{badge.name}</Badge>
          </li>
        ))}
      </ul>
      <p>{description}</p>
      <SyntaxHighlighter wrapLongLines language='javascript' style={monokai}>
        {codeString}
      </SyntaxHighlighter>
    </CardContent>
  );
};
