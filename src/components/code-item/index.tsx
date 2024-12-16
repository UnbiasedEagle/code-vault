import { Card } from '../ui/card';
import { CodeItemHeader } from './header';
import { CodeItemContent } from './content';
import { CodeItemFooter } from './footer';
import { CodeWithTags } from '@/types';

interface CodeItemProps {
  codeItem: CodeWithTags;
  showCode: boolean;
}

export const CodeItem = ({ showCode, codeItem }: CodeItemProps) => {
  const { description, code, tags } = codeItem;
  return (
    <Card className='max-h-[700px] lg:max-h-max overflow-y-auto'>
      <CodeItemHeader showCode={showCode} code={codeItem} />
      <CodeItemContent
        description={description}
        showCode={showCode}
        badges={tags}
        codeString={code}
      />
      <CodeItemFooter code={codeItem} />
    </Card>
  );
};
