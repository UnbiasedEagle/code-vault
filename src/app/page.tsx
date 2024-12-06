import Navbar from '@/components/layout/navbar';

const HomePage = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-20'>
      <Navbar />
      <div className='flex text-center flex-col gap-6 items-center justify-center'>
        <h1 className='font-bold text-3xl'>
          Organize Your Code Snippets{' '}
          <span className='text-primary'>Efficiently!</span>
        </h1>
        <p className='text-center max-w-2xl text-neutral-600'>
          With our advanced tagging and search features, you can quickly find
          the snippets you need, right when you need it. Spend less time
          searching for code and more time writing it.
        </p>
        {/* TODO: Add App Image */}
      </div>
    </div>
  );
};

export default HomePage;
