import { CreateTagBtn } from '@/app/codes/components/create-tag-btn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Edit, Search, Trash } from 'lucide-react';
import { IoMdPricetags } from 'react-icons/io';

export const TagsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className='w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all'>
        <IoMdPricetags size={18} />
        <span>Tags</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <span>
              <IoMdPricetags size={18} />
            </span>
            <span>Manage Tags</span>
          </DialogTitle>
        </DialogHeader>
        <div className='flex items-center gap-2 mt-2'>
          <div className='relative flex-1'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Search className='h-4 w-4 text-muted-foreground' />
            </div>
            <Input
              placeholder='Search tags...'
              className='h-9 pl-9 bg-muted/50'
            />
          </div>
          <CreateTagBtn />
        </div>
        <div className='max-h-96 overflow-y-auto flex flex-col gap-2 mt-2 p-1'>
          <Card>
            <CardContent className='px-4 py-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block h-3 w-3 rounded-full bg-primary'></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base text-foreground'>
                      API Methods
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      2 codes
                    </span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Edit className='h-4 w-4' />
                    <span className='sr-only'>Edit</span>
                  </Button>
                  <Button
                    variant='destructive'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Trash className='h-4 w-4' />
                    <span className='sr-only'>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='px-4 py-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block h-3 w-3 rounded-full bg-primary'></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base text-foreground'>
                      API Methods
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      2 codes
                    </span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Edit className='h-4 w-4' />
                    <span className='sr-only'>Edit</span>
                  </Button>
                  <Button
                    variant='destructive'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Trash className='h-4 w-4' />
                    <span className='sr-only'>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='px-4 py-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block h-3 w-3 rounded-full bg-primary'></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base text-foreground'>
                      API Methods
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      2 codes
                    </span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Edit className='h-4 w-4' />
                    <span className='sr-only'>Edit</span>
                  </Button>
                  <Button
                    variant='destructive'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Trash className='h-4 w-4' />
                    <span className='sr-only'>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='px-4 py-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block h-3 w-3 rounded-full bg-primary'></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base text-foreground'>
                      API Methods
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      2 codes
                    </span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Edit className='h-4 w-4' />
                    <span className='sr-only'>Edit</span>
                  </Button>
                  <Button
                    variant='destructive'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Trash className='h-4 w-4' />
                    <span className='sr-only'>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='px-4 py-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block h-3 w-3 rounded-full bg-primary'></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base text-foreground'>
                      API Methods
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      2 codes
                    </span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Edit className='h-4 w-4' />
                    <span className='sr-only'>Edit</span>
                  </Button>
                  <Button
                    variant='destructive'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Trash className='h-4 w-4' />
                    <span className='sr-only'>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='px-4 py-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block h-3 w-3 rounded-full bg-primary'></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base text-foreground'>
                      API Methods
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      2 codes
                    </span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Edit className='h-4 w-4' />
                    <span className='sr-only'>Edit</span>
                  </Button>
                  <Button
                    variant='destructive'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Trash className='h-4 w-4' />
                    <span className='sr-only'>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='px-4 py-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block h-3 w-3 rounded-full bg-primary'></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base text-foreground'>
                      API Methods
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      2 codes
                    </span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Edit className='h-4 w-4' />
                    <span className='sr-only'>Edit</span>
                  </Button>
                  <Button
                    variant='destructive'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Trash className='h-4 w-4' />
                    <span className='sr-only'>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='px-4 py-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block h-3 w-3 rounded-full bg-primary'></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base text-foreground'>
                      API Methods
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      2 codes
                    </span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Edit className='h-4 w-4' />
                    <span className='sr-only'>Edit</span>
                  </Button>
                  <Button
                    variant='destructive'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Trash className='h-4 w-4' />
                    <span className='sr-only'>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='px-4 py-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block h-3 w-3 rounded-full bg-primary'></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base text-foreground'>
                      API Methods
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      2 codes
                    </span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Edit className='h-4 w-4' />
                    <span className='sr-only'>Edit</span>
                  </Button>
                  <Button
                    variant='destructive'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Trash className='h-4 w-4' />
                    <span className='sr-only'>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='px-4 py-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='inline-block h-3 w-3 rounded-full bg-primary'></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base text-foreground'>
                      API Methods
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      2 codes
                    </span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Edit className='h-4 w-4' />
                    <span className='sr-only'>Edit</span>
                  </Button>
                  <Button
                    variant='destructive'
                    size='icon'
                    className='h-8 w-8 border'
                  >
                    <Trash className='h-4 w-4' />
                    <span className='sr-only'>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};
