import { CodeItem } from './code-item';

interface CodeListProps {
  showCode?: boolean;
}

export const CodeList = ({ showCode = true }: CodeListProps) => {
  return (
    <ul className='flex flex-wrap gap-4'>
      <CodeItem showCode={showCode} />
      <CodeItem showCode={showCode} />
      <CodeItem showCode={showCode} />
      <CodeItem showCode={showCode} />
      <CodeItem showCode={showCode} />
      <CodeItem showCode={showCode} />
      <CodeItem showCode={showCode} />
      <CodeItem showCode={showCode} />
    </ul>
  );
};
