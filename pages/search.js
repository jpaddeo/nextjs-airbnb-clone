import { useRouter } from 'next/router';
import { format } from 'date-fns';

import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Head>
        <title>JPA Airbnb | Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header searchPlaceholder={`${location} | ${range} | ${guests} guests`} />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            {searchResults.length}+ Stays in {range} for {guests} number of
            guests
          </p>
          <h1 className='text-3xl font-semibold mt-2'>Stays in {location}</h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='p-button'>Cancelation Flexibility</p>
            <p className='p-button'>Type of Place</p>
            <p className='p-button'>Price</p>
            <p className='p-button'>Rooms and Beds</p>
            <p className='p-button'>More Filters</p>
          </div>

          <div className='flex flex-col'>
            {searchResults.map((searchResult) => (
              <InfoCard key={searchResult.img} {...searchResult} />
            ))}
          </div>
        </section>
        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
