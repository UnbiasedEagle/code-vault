import { Card } from '../ui/card';
import { CodeItemHeader } from './header';
import { CodeItemContent } from './content';
import { CodeItemFooter } from './footer';
import { ICodeItem } from '@/types';

interface CodeItemProps {
  code: ICodeItem;
  showCode: boolean;
}

export const CodeItem = ({ showCode, code }: CodeItemProps) => {
  return (
    <li>
      <Card>
        <CodeItemHeader code={code} />
        <CodeItemContent
          showCode={showCode}
          badges={code.tags}
          codeString={code.codeString}
        />
        <CodeItemFooter language={code.language} />
      </Card>
    </li>
  );
};
