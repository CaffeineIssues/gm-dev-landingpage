import React from 'react';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="md:container  h-screen absolute top-0">
      {' '}
      {/* Set the height to 100vh */}
      <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full w-screen">
        {' '}
        {/* Set the height to 100% */}
        <div
          className="col-span-3 row-span-2 h-1/2  bg-center"
          style={{ backgroundImage: 'url(./images/close-up.jpg)' }}
        ></div>
        <div className="col-span-2 col-start-4"></div>
        <div
          className="col-span-2 row-span-3 col-start-4 row-start-3 h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(./images/female.jpg)' }}
        ></div>
        <div className="col-span-2 row-span-3 col-start-1 row-start-3">
          <Image
            src="/logo/white.png"
            alt="logo"
            width="640"
            height="640"
            className="absolute bottom-10"
          />
        </div>
      </div>
    </div>
  );
}
