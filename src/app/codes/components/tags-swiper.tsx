import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { CreateTagBtn } from './create-tag-btn';
import { TagSwiperItem } from './tag-swiper-item';
import prisma from '@/lib/db';
import { TagSwiperList } from './tag-swiper-list';

export const TagsSwiper = async ({ userId }: { userId: string }) => {
  const tags = await prisma.tag.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

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
                  <TagSwiperItem />
                </CarouselItem>
                <TagSwiperList tags={tags} />
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
