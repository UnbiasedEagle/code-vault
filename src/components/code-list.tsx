import { Code } from '@prisma/client';
import { CodeItem } from './code-item';

interface CodeListProps {
  showCode?: boolean;
}

const codeItems: Code[] = [
  {
    id: '1',
    userId: '1',
    title: 'Authentication Hook for API Requests',
    description:
      'A custom React hook for handling authentication state and token management. Useful for protecting routes and managing user sessions in React applications.',
    createdAt: new Date(Date.now() - 3600000), // 1 hour ago
    updatedAt: new Date(Date.now() - 1800000), // 30 minutes ago
    language: 'TypeScript',
    tags: ['react', 'hooks', 'auth'],
    code: `const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  return { token, setToken };
};`,
    favorited: false,
  },
  {
    id: '2',
    userId: '1',
    title: 'Array Utilities for Data Transformation',
    description:
      'A utility function that splits an array into smaller chunks of specified size. Perfect for pagination, data processing, and managing large datasets.',
    createdAt: new Date(Date.now() - 86400000),
    updatedAt: new Date(Date.now() - 85000000),
    language: 'JavaScript',
    tags: ['arrays', 'utils', 'data'],
    code: `const chunk = (arr, size) => 
  Array.from({ length: Math.ceil(arr.length / size) }, 
    (_, i) => arr.slice(i * size, i * size + size)
  );`,
    favorited: true,
  },
  {
    id: '3',
    userId: '1',
    title: 'Custom Form Validation Hook',
    description:
      'A reusable form validation hook for React applications. Handles common validation scenarios and provides a clean API for managing form errors.',
    createdAt: new Date(Date.now() - 172800000),
    updatedAt: new Date(Date.now() - 170000000),
    language: 'TypeScript',
    tags: ['react', 'forms', 'validation'],
    code: `const useValidation = (initialValues: FormValues) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validate = (values: FormValues) => {
    const newErrors = {};
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return { errors, validate };
};`,
    favorited: false,
  },
];

export const CodeList = ({ showCode = true }: CodeListProps) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4'>
      {codeItems.map((codeItem) => (
        <li key={codeItem.id}>
          <CodeItem key={codeItem.id} codeItem={codeItem} showCode={showCode} />
        </li>
      ))}
    </ul>
  );
};
