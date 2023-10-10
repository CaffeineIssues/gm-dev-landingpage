import React from 'react';
import Image from 'next/image';
import Header from './Theme/Header/HorizontalNavBar/Main';
import ShowCase from './Sections/ShowCase';
export default function Home() {
  return (
    <>
      <Header />
      <ShowCase />
    </>
  );
}
