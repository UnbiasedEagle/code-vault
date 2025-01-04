import Navbar from '@/components/layout/navbar';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20 sm:gap-10'>
      <Navbar />
      <div className='flex text-center flex-col gap-6 items-center justify-center'>
        <h1 className='font-bold text-3xl'>
          Organize Your Code Snippets{' '}
          <span className='text-primary'>Efficiently!</span>
        </h1>
        <p className='text-center max-w-2xl text-neutral-600 dark:text-neutral-400'>
          With our advanced tagging and search features, you can quickly find
          the snippets you need, right when you need it. Spend less time
          searching for code and more time writing it.
        </p>
        <Image
          className='border rounded-lg'
          src='/app.png'
          width={800}
          height={500}
          alt='App'
        />
      </div>
    </div>
  );
};

export default HomePage;
