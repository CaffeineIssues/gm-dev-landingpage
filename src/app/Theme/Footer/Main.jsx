import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className="relative  bg-n-dark-purple">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-n-dark-purple"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src="/logo/white.png" alt="logo" width="80%" />
            </a>
          </div>
          <div className="w-full flex">
            <div class="w-full text-right px-4">
              <h4 class="text-3xl font-extrabold fonat-semibold text-blueGray-700">
                Vamos manter contato!
              </h4>
              <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                Nos encontre em qualquer uma destas plataformas; respondemos em
                1-2 dias úteis.
              </h5>
              <div class="mt-6 lg:mb-0 mb-6 flex-row flex justify-end">
                <button
                  class="flex hover:text-n-dark-purple text-white bg-n-light-purple text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaTwitter />
                </button>
                <button
                  class="flex hover:text-n-dark-purple text-white bg-n-light-purple text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebook />
                </button>
                <button
                  class="flex hover:text-n-dark-purple text-white bg-n-light-purple text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaInstagram />
                </button>
                <button
                  class="flex hover:text-n-dark-purple text-white bg-n-light-purple text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2023 - GM Desenvolvimento de Software
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0"></div>
        </div>
      </div>
    </div>
  );
}
