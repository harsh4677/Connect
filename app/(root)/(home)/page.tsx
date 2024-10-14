import React from 'react';
import EN_Button from '@/components/EN_Button';
import PN_Button from '@/components/PN_Button';

function Home() {
  return (
    <section className="flex h-screen w-screen flex-col  justify-center items-center gap-10 text-white">
      <div className="h-[700px] w-full rounded-[30px] bg-hero bg-cover bg-center flex items-center justify-center">
        <h1 className="flex h-full flex-col   max-md:px-5 max-md:py-8 lg:p-11">
            Hi
        </h1>
      </div>
      <div className='flex flex-col md:flex-row gap-4 w-full justify-center items-center max-w-lg'>
        <EN_Button className="w-full md:w-auto px-4 py-2 text-center" />
        <PN_Button className="w-full md:w-auto px-4 py-2 text-center" />
      </div>
    </section>
  );
}

export default Home;
