'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface LanguagesSectionProps {
  languageCounts: {
    label: string;
    name: string;
    count: number;
    icon: JSX.Element;
  }[];
}

export const LanguagesSection = ({ languageCounts }: LanguagesSectionProps) => {
  const router = useRouter();

  return (
    <div className='space-y-3'>
      <span className='text-xs font-semibold text-muted-foreground px-2 uppercase tracking-wider'>
        Languages
      </span>
      <ul className='flex flex-col space-y-1'>
        {languageCounts.map((language) => (
          <Button
            asChild
            onClick={() => {
              const currentParams = new URLSearchParams(window.location.search);
              currentParams.set('language', language.label);
              router.push(`/codes?${currentParams.toString()}`);
            }}
            variant='ghost'
            key={language.name}
            className='group flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all cursor-pointer'
          >
            <div>
              <div className='flex items-center gap-2'>
                {language.icon}
                <span>{language.name}</span>
              </div>
              <div className='flex items-center justify-center h-5 min-w-[20px] px-2 text-xs font-semibold bg-primary/10 text-primary rounded-full'>
                {language.count}
              </div>
            </div>
          </Button>
        ))}
      </ul>
    </div>
  );
};
