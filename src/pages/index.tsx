import React from 'react';
import Meta from '@/components/layout/Meta';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home(): JSX.Element {
  return (
    <>
      <Meta title=".." description=".." />
      <Header />
      <main className="flex min-h-screen items-center justify-center pt-[150px]">
        Hello world.
      </main>
      <Footer />
    </>
  );
}