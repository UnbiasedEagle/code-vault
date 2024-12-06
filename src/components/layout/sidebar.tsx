'use client';

import { FaCode } from 'react-icons/fa';
import { AiFillSnippets } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { Trash } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { DiJavascript } from 'react-icons/di';
import { DiPython } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

const menuItems = [
  {
    icon: AiFillSnippets,
    label: 'All Codes',
    href: '/codes',
  },
  {
    icon: FaRegHeart,
    label: 'Favorites',
    href: '/codes/favorites',
  },
  {
    icon: Trash,
    label: 'Trash',
    href: '/codes/trash',
  },
];

export const Sidebar = () => {
  return (
    <div className='w-80 flex flex-col h-screen border-r bg-white/50 backdrop-blur-sm'>
      <div className='flex items-center gap-2 px-6 h-16 border-b'>
        <FaCode className='text-primary' size={24} />
        <span className='font-bold text-xl text-primary'>CodeVault</span>
      </div>
      <div className='flex-1 flex flex-col gap-6 p-4 overflow-y-auto'>
        <QuickLinks />
        <Languages />
      </div>
    </div>
  );
};

const QuickLinks = () => {
  const pathname = usePathname();

  return (
    <div className='space-y-3'>
      <span className='text-xs font-semibold text-muted-foreground px-2 uppercase tracking-wider'>
        Quick Links
      </span>
      <nav>
        <ul className='space-y-1'>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all',
                    isActive && 'bg-accent/50 text-accent-foreground shadow-sm'
                  )}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const Languages = () => {
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
