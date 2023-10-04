import React from 'react';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="md:container md:mx-auto">
      <Image
        src="/logo/white.png"
        alt="logo"
        width="640"
        height="640"
        className="absolute bottom-10"
      />
    </div>
  );
}
