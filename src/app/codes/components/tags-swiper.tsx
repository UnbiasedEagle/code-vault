import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { CreateTagBtn } from './create-tag-btn';
import { Tag } from '@prisma/client';

interface TagsSwiperProps {
  tags: Tag[];
}

export const TagsSwiper = ({ tags }: TagsSwiperProps) => {
  return (
    <Card>
      <CardContent className='p-4'>
        <div className='flex relative items-center gap-2 overflow-hidden'>
          <div
            className='absolute overflow-hidden'
            style={{
              width: 'calc(100% - 80px)',
            }}
          >
            <Carousel
              opts={{
                dragFree: true,
              }}
              style={{
                width: 'calc(100% - 16px)',
              }}
            >
              <CarouselContent className='flex text-neutral-400 font-medium'>
                <CarouselItem>
                  <Button>All</Button>
                </CarouselItem>
                {tags.map((tag) => (
                  <CarouselItem key={tag.id}>
                    <Button variant='ghost'>{tag.name}</Button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className='ml-auto'>
            <CreateTagBtn />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
