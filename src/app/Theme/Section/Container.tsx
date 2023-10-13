'use client';
import React from 'react';

export default function Container({
  children,
  bgimg,
}: {
  children: React.ReactNode;
  bgimg?: string;
}) {
  return (
    <>
      <div
        className={
          "h-screen min-h-full bg-cover bg-no-repeat bg-center p-12 bg-[url('/bg-2.png')] rounded-t-3xl"
        }
      >
        {children}
      </div>
    </>
  );
}
