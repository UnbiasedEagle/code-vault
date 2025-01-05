'use client';

import { Button } from '@/components/ui/button';
import { useSearchParams, useRouter } from 'next/navigation';

interface TagSwiperItemProps {
  tag?: { id: string; name: string };
}

export const TagSwiperItem = ({ tag }: TagSwiperItemProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = () => {
    const currentParams = new URLSearchParams(window.location.search);
    if (tag) {
      currentParams.set('tag', tag.id);
    } else {
      currentParams.delete('tag');
    }
    router.push(`/codes?${currentParams.toString()}`);
  };

  return (
    <Button
      onClick={handleClick}
      variant={
        tag
          ? searchParams.get('tag') === tag.id
            ? 'default'
            : 'secondary'
          : searchParams.get('tag')
          ? 'secondary'
          : 'default'
      }
    >
      {tag ? tag.name : 'All'}
    </Button>
  );
};
