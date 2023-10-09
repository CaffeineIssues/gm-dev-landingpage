import React from 'react';
import Image from 'next/image';
import Header from './Theme/Header/HorizontalNavBar/Main';
export default function Home() {
  return (
    <div className=" h-screen  bg-cover bg-[url('/bg.png')]">
      <>
        <Header />
      </>
    </div>
  );
}
