import React from 'react';

export default function NavButton({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="text-2xl md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12">
        {children}
      </div>
    </>
  );
}
