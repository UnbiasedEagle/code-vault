import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Plus } from 'lucide-react';

export const TagsSwiper = () => {
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
                <CarouselItem>
                  <Button variant='ghost'>JavaScript</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>React</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>Node.js</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>Python</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>TypeScript</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>Vue.js</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>Angular</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>Django</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>Flask</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>Ruby on Rails</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>Spring</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>Laravel</Button>
                </CarouselItem>
                <CarouselItem>
                  <Button variant='ghost'>Express</Button>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <div className='ml-auto'>
            <Button className='flex items-center gap-1'>
              <Plus className='h-5 w-5' />
              Tag
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
