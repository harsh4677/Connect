import Fotter from '@/components/Fotter';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Anoushka",
  description: "EN PN Calculator",
  icons: '/icons/logo.svg'
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='relative'>
        <Navbar/>

        <div className='flex'>
            <section className='flrx min-h-screen flex-1flex-col px-6 pb-6 pt-28 
            max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                    {children}
                </div>
            </section>
        </div>
        <Fotter/>
    </main>
  );
};

export default HomeLayout;
