import { clsx, type ClassValue } from 'clsx';
import { DiJavascript } from 'react-icons/di';
import { SiPython, SiTypescript } from 'react-icons/si';
import { TbBrandCpp, TbBrandCSharp } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import { FaJava } from 'react-icons/fa';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Languages = [
  {
    name: 'JavaScript',
    label: 'javascript',
    icon: DiJavascript,
  },
  {
    name: 'TypeScript',
    label: 'typescript',
    icon: SiTypescript,
  },
  {
    name: 'Python',
    label: 'python',
    icon: SiPython,
  },
  {
    name: 'Java',
    label: 'java',
    icon: FaJava,
  },
  {
    name: 'C++',
    label: 'cpp',
    icon: TbBrandCpp,
  },
  {
    name: 'C#',
    label: 'csharp',
    icon: TbBrandCSharp,
  },
];
