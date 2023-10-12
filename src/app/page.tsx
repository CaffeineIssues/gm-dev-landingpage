import React from 'react';
import Image from 'next/image';
import Header from './Theme/Header/HorizontalNavBar/Main';
import ShowCase from './Sections/ShowCase';
import Clients from './Sections/Clients';
export default function Home() {
  return (
    <>
      <Header />
      <ShowCase />
      <Clients />
    </>
  );
}
