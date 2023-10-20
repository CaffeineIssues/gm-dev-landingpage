import React from 'react';
import Header from '../Theme/Header/LateralNavBar/Main';
import Image from 'next/image';

export default function ShowCase() {
  return (
    <div
      id="home"
      className="h-screen min-h-full bg-cover bg-no-repeat bg-center p-12 bg-[url('/bg.png')] rounded-b-3xl"
    >
      <>
        <div className="grid grid-cols-2 gap-4 h-screen overflow-hidden">
          <div className="p-4 flex items-center justify-center">
            <div className="p-4 flex items-center justify-center">
              <div className="grid grid-rows-2 gap-4 justify-center  overflow-hidden">
                <div className="p-4 justify-center items-center lg:block hidden">
                  {' '}
                  {/* Conditional visibility */}{' '}
                  <img src="/logo/white.png" alt="logo" width="80%" />
                </div>
                <div className="p-6 flex flex-col items-center justify-center">
                  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Soluções Digitais Sob Medida
                  </h1>
                  <p className="mb-6 text-lg font-normal text-gray-500">
                    Transformamos suas ideias em software realidade, adaptando
                    soluções às suas necessidades.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    style={{ marginLeft: '-62%' }}
                  >
                    Iniciar meu projeto
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4"></div>
        </div>
      </>
    </div>
  );
}
