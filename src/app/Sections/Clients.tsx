'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Clients() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const sliderImageUrl = [
    //First image url

    {
      url: 'https://play-lh.googleusercontent.com/LHch7dBdxJDevGnn6PDWntEjH2Q91FENXh21-ZHDNFk-UOzzJtqxjIXpG2omjk6yVQqX',
    },
    {
      url: 'https://sinconpece.com.br/static/media/1.5f3a941f9c78a55a197a.png',
    },
    {
      url: 'http://sindusconce.com.br/wp-content/themes/2017_sindusconce/images/logo.png',
    },
    {
      url: 'https://static.wixstatic.com/media/b222d8_1e2a533209c743eabe5bd9f5366a9b69~mv2.png/v1/fill/w_408,h_124,al_c,lg_1,q_85,enc_auto/logo.png',
    },
    {
      url: 'https://static.wixstatic.com/media/b222d8_65d714095c3f449e883356fb7750b1c5~mv2.png/v1/fill/w_300,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png',
    },

    {
      url: 'https://infinitydistribuidora.com.br/wp-content/uploads/2019/05/LOGOMARCA-Infinity-1024x231.png',
    },

    {
      url: 'https://www.protegeexpress.com.br/img/logo.png',
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center bg-n-light-purple pt-8">
        <h1 className=" text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
          Cases de Sucesso
        </h1>
      </div>
      <div className="bg-n-light-purple">
        <div className="parent">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
            transitionDuration={1000}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {sliderImageUrl.map((imageUrl, index) => {
              return (
                <div className="slider" key={index}>
                  <div className="logo-container flex items-center justify-center h-12vh p-24">
                    <div className="flex items-center">
                      <img
                        src={imageUrl.url}
                        alt="movie"
                        className="logo max-w-full max-h-full"
                        style={{ minWidth: '50px', minHeight: '50px' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
