import { CodeItem } from './code-item';

interface CodeListProps {
  showCode?: boolean;
}

export const CodeList = ({ showCode = true }: CodeListProps) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4'>
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
