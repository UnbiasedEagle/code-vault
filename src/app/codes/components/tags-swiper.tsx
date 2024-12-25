import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { SimpleTag } from '@/types';
import { CreateTagBtn } from './create-tag-btn';
import { useRouter, useSearchParams } from 'next/navigation';

interface TagsSwiperProps {
  tags: SimpleTag[];
}

export const TagsSwiper = ({ tags }: TagsSwiperProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

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
                  <Button
                    variant={searchParams.get('tag') ? 'secondary' : 'default'}
                    onClick={() => {
                      const currentParams = new URLSearchParams(
                        window.location.search
                      );
                      currentParams.delete('tag');
                      router.push(`/codes?${currentParams.toString()}`);
                    }}
                  >
                    All
                  </Button>
                </CarouselItem>
                {tags.map((tag) => (
                  <CarouselItem key={tag.id}>
                    <Button
                      onClick={() => {
                        const currentParams = new URLSearchParams(
                          window.location.search
                        );
                        currentParams.set('tag', tag.id);
                        router.push(`/codes?${currentParams.toString()}`);
                      }}
                      variant={
                        searchParams.get('tag') === tag.id
                          ? 'default'
                          : 'secondary'
                      }
                    >
                      {tag.name}
                    </Button>
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
