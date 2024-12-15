import { clsx, type ClassValue } from 'clsx';
import { DiJavascript } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { twMerge } from 'tailwind-merge';

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
];
