import { ICodeItem } from '@/types';
import { CodeItem } from './code-item';

interface CodeListProps {
  showCode?: boolean;
}

const codeItems: ICodeItem[] = [
  {
    id: '1',
    title: 'Authentication Hook for API Requests',
    date: new Date(), // Today
    language: 'TypeScript',
    tags: ['react', 'hooks', 'auth'],
    codeString: `const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  return { token, setToken };
};`,
    isLiked: false,
  },
  {
    id: '2',
    title: 'Array Utilities for Data Transformation',
    date: new Date(Date.now() - 86400000), // Yesterday (24 hours ago)
    language: 'JavaScript',
    tags: ['arrays', 'utils', 'data'],
    codeString: `const chunk = (arr, size) => 
  Array.from({ length: Math.ceil(arr.length / size) }, 
    (_, i) => arr.slice(i * size, i * size + size)
  );`,
    isLiked: true,
  },
  {
    id: '3',
    title: 'Custom Form Validation Hook',
    date: new Date(Date.now() - 172800000), // 2 days ago (48 hours)
    language: 'TypeScript',
    tags: ['react', 'forms', 'validation'],
    codeString: `const useValidation = (initialValues) => {
  const [errors, setErrors] = useState({});
  // ... validation logic
  return { errors, validate };
};`,
    isLiked: false,
  },
];

export const CodeList = ({ showCode = true }: CodeListProps) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4'>
      {codeItems.map((codeItem) => (
        <CodeItem key={codeItem.id} code={codeItem} showCode={showCode} />
      ))}
    </ul>
  );
};
