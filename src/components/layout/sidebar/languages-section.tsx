import prisma from '@/lib/db';
import { Languages } from '@/lib/utils';
import { LanguageSectionItem } from './language-section-item';

export const LanguagesSection = async () => {
  const codesByLanguage = await prisma.code.groupBy({
    by: ['language'],
    _count: {
      language: true,
    },
  });

  const languageCounts = codesByLanguage.map((language) => {
    const foundLanguage = Languages.find(
      (lang) => lang.label === language.language
    )!;
    return {
      icon: <foundLanguage.icon className='text-lg opacity-75' />,
      name: foundLanguage.name,
      count: language._count.language,
      label: foundLanguage.label,
    };
  });

  return (
    <div className='space-y-3'>
      <span className='text-xs font-semibold text-muted-foreground px-2 uppercase tracking-wider'>
        Languages
      </span>
      <ul className='flex flex-col space-y-1'>
        {languageCounts.map((language) => (
          <LanguageSectionItem key={language.label} language={language} />
        ))}
      </ul>
    </div>
  );
};
