'use client';

import { CarouselItem } from '@/components/ui/carousel';
import { SimpleTag } from '@/types';
import { TagSwiperItem } from './tag-swiper-item';
import { useEffect } from 'react';
import { useTags } from '@/stores/use-tags';

interface TagSwiperListProps {
  tags: SimpleTag[];
}

export const TagSwiperList = ({ tags }: TagSwiperListProps) => {
  const { setTags } = useTags();

  useEffect(() => {
    setTags(tags);
  }, [tags, setTags]);

  return tags.map((tag) => (
    <CarouselItem key={tag.id}>
      <TagSwiperItem tag={tag} />
    </CarouselItem>
  ));
};
