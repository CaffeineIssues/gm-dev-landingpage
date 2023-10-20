import React from 'react';
import Image from 'next/image';
import Header from './Theme/Header/HorizontalNavBar/Main';
import Footer from './Theme/Footer/Main';
import ShowCase from './Sections/ShowCase';
import Clients from './Sections/Clients';
import Services from './Sections/Services';
import Contact from './Sections/Contact';
export default function Home() {
  return (
    <>
      <Header />
      <ShowCase />
      <Clients />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
