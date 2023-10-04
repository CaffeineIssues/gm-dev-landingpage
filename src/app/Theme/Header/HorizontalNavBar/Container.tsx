import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          {children}
        </nav>
      </header>
    </>
  );
}
