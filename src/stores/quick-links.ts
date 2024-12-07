import { IconType } from 'react-icons';
import { AiFillSnippets } from 'react-icons/ai';
import { FaRegHeart, FaTrash } from 'react-icons/fa';
import { create } from 'zustand';

interface QuickLinks {
  links: {
    icon: IconType;
    label: string;
    href: string;
  }[];
}

const links = [
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
    icon: FaTrash,
    label: 'Trash',
    href: '/codes/trash',
  },
];

export const useQuickLinks = create<QuickLinks>(() => ({
  links,
}));
