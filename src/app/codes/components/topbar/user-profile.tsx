interface UserProfileProps {
  imageUrl: string;
  fullName: string;
  email: string;
}

export const UserProfile = ({ imageUrl, fullName, email }: UserProfileProps) => {
  return (
    <div className='flex items-center space-x-4'>
      <div className='flex-shrink-0'>
        <img
          height={48}
          width={48}
          className='rounded-full border-2 border-border/50 shadow-sm'
          src={imageUrl}
          alt='User Avatar'
        />
      </div>
      <div className='min-w-0'>
        <h3 className='text-base font-semibold text-foreground truncate'>
          {fullName}
        </h3>
        <p className='text-xs text-muted-foreground/80 mt-0.5'>{email}</p>
      </div>
    </div>
  );
};
