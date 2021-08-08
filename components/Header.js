import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      <div className='flex justify-between items-center md:border-2 rounded-full p-2 md:shadow-sm'>
        <input
          type='text'
          placeholder='Start yor search'
          className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-200'
        />
        <SearchIcon className='hidden h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:inline-flex md:mx-2' />
      </div>
      {/* right */}
      <div className='flex items-center space-x-4 justify-end'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 text-gray-500 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
          <MenuIcon className='h-6 text-gray-500 cursor-pointer' />
          <UserCircleIcon className='h-6 text-gray-500 cursor-pointer' />
        </div>
      </div>
    </header>
  );
};

export default Header;
