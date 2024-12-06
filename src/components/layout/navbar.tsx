import { FaCode } from 'react-icons/fa';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className='flex flex-col sm:flex-row mt-10 sm:mt-0 sm:h-20 items-center justify-between'>
      <div className='flex items-center gap-2'>
        <FaCode className='text-primary' size={32} />
        <span className='font-bold text-2xl text-primary'>CodeVault</span>
      </div>
      <div className='flex flex-col w-full sm:w-auto mt-8 sm:mt-0 sm:flex-row sm:items-center gap-4 sm:gap-2'>
        <Button className='w-full sm:w-auto'>Sign In</Button>
        <Button className='w-full sm:w-auto' variant='secondary'>
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
