import prisma from '@/lib/db';
import { Languages } from '@/lib/utils';

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
      icon: foundLanguage.icon,
      name: foundLanguage.name,
      count: language._count.language,
    };
  });

  console.log(languageCounts);

  return (
    <div className='space-y-3'>
      <span className='text-xs font-semibold text-muted-foreground px-2 uppercase tracking-wider'>
        Languages
      </span>
      <ul className='flex flex-col space-y-1'>
        {languageCounts.map((language) => (
          <li
            key={language.name}
            className='group flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all cursor-pointer'
          >
            <div className='flex items-center gap-2'>
              <language.icon className='text-lg opacity-75' />
              <span>{language.name}</span>
            </div>
            <div className='flex items-center justify-center h-5 min-w-[20px] px-2 text-xs font-semibold bg-primary/10 text-primary rounded-full'>
              {language.count}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
