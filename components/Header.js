import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

const Header = ({ searchPlaceholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const router = useRouter();

  const handleChangeSearchInput = (ev) => {
    setSearchInput(ev.target.value);
  };
  const handleChangeGuestsInput = (ev) => {
    setGuests(ev.target.value);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelectionRange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetData = () => {
    setSearchInput('');
    setStartDate(new Date());
    setEndDate(new Date());
    setGuests(1);
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      },
    });
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div
        onClick={() => router.push('/')}
        className='relative flex items-center h-10 cursor-pointer my-auto'
      >
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
          placeholder={searchPlaceholder || 'Start yor search'}
          value={searchInput}
          onChange={handleChangeSearchInput}
          className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-200'
        />
        <SearchIcon className='hidden h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:inline-flex md:mx-2' />
      </div>
      <div className='flex items-center space-x-4 justify-end'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 text-gray-500 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
          <MenuIcon className='h-6 text-gray-500 cursor-pointer' />
          <UserCircleIcon className='h-6 text-gray-500 cursor-pointer' />
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto border-r-2 border-b-2 border-l-2'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#fd5b61']}
            onChange={handleSelectionRange}
          />
          <div className='flex items-center mb-2'>
            <h2 className='text-xl flex-grow font-semibold'>
              Number of guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              type='number'
              className='w-12 pl-2 text-lg outline-none text-red-400'
              min={1}
              value={guests}
              onChange={handleChangeGuestsInput}
            />
          </div>
          <div className='flex items-center justify-between p-2'>
            <button onClick={resetData} className='flex-grow text-gray-400'>
              Cancel
            </button>
            <button
              onClick={search}
              className='flex-grow text-white bg-red-400 rounded-full p-1'
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
