import { SignIn } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <SignIn />
    </div>
  );
};

export default SignUpPage;
