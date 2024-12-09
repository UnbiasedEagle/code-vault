import { Card } from '../ui/card';
import { CodeItemHeader } from './header';
import { CodeItemContent } from './content';
import { CodeItemFooter } from './footer';
import { SiJavascript } from 'react-icons/si';

const badges = [
  'functions',
  'variables',
  'loops',
  'conditions',
  'events',
  'callbacks',
  'promises',
  'async/await',
];

const language = {
  name: 'JavaScript',
  icon: SiJavascript,
};

interface CodeItemProps {
  showCode: boolean;
}

export const CodeItem = ({ showCode }: CodeItemProps) => {
  const codeString = `
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result = add(5, 10);
console.log('The result is:', result);
`;

  return (
    <li>
      <Card>
        <CodeItemHeader
          title='Lorem ipsum dolor sit amet consectetur.'
          date={new Date().toDateString()}
        />
        <CodeItemContent
          showCode={showCode}
          badges={badges}
          codeString={codeString}
        />
        <CodeItemFooter language={language} />
      </Card>
    </li>
  );
};
