import { FaCode } from 'react-icons/fa';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className='flex h-20 items-center justify-between'>
      <div className='flex items-center gap-2'>
        <FaCode className='text-primary' size={32} />
        <span className='font-bold text-2xl text-primary'>CodeVault</span>
      </div>
      <div className='flex gap-2'>
        <Button>Sign In</Button>
        <Button variant='secondary'>Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
