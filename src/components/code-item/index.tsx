import { Card } from '../ui/card';
import { CodeItemHeader } from './header';
import { CodeItemContent } from './content';
import { CodeItemFooter } from './footer';
import { Code } from '@prisma/client';

interface CodeItemProps {
  codeItem: Code;
  showCode: boolean;
}

export const CodeItem = ({ showCode, codeItem }: CodeItemProps) => {
  const { description, code, tags } = codeItem;
  return (
    <Card>
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
