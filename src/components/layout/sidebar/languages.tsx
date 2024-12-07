import { DiJavascript, DiPython } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

export const Languages = () => {
  return (
    <div className='space-y-3'>
      <span className='text-xs font-semibold text-muted-foreground px-2 uppercase tracking-wider'>
        Languages
      </span>
      <ul className='flex flex-col space-y-1'>
        <li className='group flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all cursor-pointer'>
          <div className='flex items-center gap-3'>
            <DiJavascript className='text-lg opacity-75' />
            <span>JavaScript</span>
          </div>
          <div className='flex items-center justify-center h-5 min-w-[20px] px-2 text-xs font-semibold bg-primary/10 text-primary rounded-full'>
            5
          </div>
        </li>
        <li className='group flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all cursor-pointer'>
          <div className='flex items-center gap-3'>
            <DiPython className='text-lg opacity-75' />
            <span>Python</span>
          </div>
          <div className='flex items-center justify-center h-5 min-w-[20px] px-2 text-xs font-semibold bg-primary/10 text-primary rounded-full'>
            3
          </div>
        </li>
        <li className='group flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all cursor-pointer'>
          <div className='flex items-center gap-3'>
            <SiTypescript className='text-lg opacity-75' />
            <span>TypeScript</span>
          </div>
          <div className='flex items-center justify-center h-5 min-w-[20px] px-2 text-xs font-semibold bg-primary/10 text-primary rounded-full'>
            4
          </div>
        </li>
      </ul>
    </div>
  );
};
