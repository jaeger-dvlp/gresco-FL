import React from 'react';
import Meta from '@/components/layout/Meta';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/home/Banner';
import Counters from '@/components/home/Counters';
import Desc from '@/components/home/Desc';

export default function Home(): JSX.Element {
  return (
    <>
      <Meta title=".." description=".." />
      <Header />
      <main className="m-0 flex flex-col items-center justify-start bg-white p-0 font-theme">
        <Banner />
        <Counters />
        <Desc />
      </main>
      <Footer />
    </>
  );
}
