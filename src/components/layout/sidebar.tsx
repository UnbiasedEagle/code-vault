'use client';

import { FaCode } from 'react-icons/fa';
import { AiFillSnippets } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { Trash } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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
  const pathname = usePathname();

  return (
    <div className='w-80 flex flex-col px-4 py-8 h-screen border-r'>
      <div className='flex items-center gap-2 px-4'>
        <FaCode className='text-primary' size={32} />
        <span className='font-bold text-2xl text-primary'>CodeVault</span>
      </div>
      <div className='mt-8'>
        <span className='text-sm font-medium text-muted-foreground px-4'>
          Quick Links
        </span>
        <nav className='mt-4'>
          <ul className='space-y-1'>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors',
                      isActive && 'bg-accent text-accent-foreground'
                    )}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
