import Head from 'next/head';

import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>JPA Airbnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      
      <main className='max-w-7xl mx-auto'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((exploreItem) => (
              <SmallCard
                key={exploreItem.img}
                img={exploreItem.img}
                distance={exploreItem.distance}
                location={exploreItem.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide pl-3 ml-3'>
            {cardsData?.map((cardItem) => (
              <MediumCard
                key={cardItem.img}
                img={cardItem.img}
                title={cardItem.title}
              />
            ))}
          </div>
        </section>

        <section className='relative py-16 cursor-pointer'>
          <LargeCard
            img='https://links.papareact.com/4cj'
            title='The Gratest Outdoors'
            description='Whishlists curated by Airbnb'
            buttonText='Get Inspired'
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );
  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
