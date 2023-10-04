import React from 'react';

import { TbHome } from 'react-icons/tb';
import NavButton from './buttons/NavButton';
function Header() {
  return (
    <>
      <div className="static uppercase font-semibold rounded-lg flex md:flex-col md:ml-1 shadow-lg border-gray-600 justify-around md:h-screen md:w-16 fixed w-screen bottom-0">
        <NavButton>
          <TbHome />
        </NavButton>
        <NavButton>
          <TbHome />
        </NavButton>
        <NavButton>
          <TbHome />
        </NavButton>
        <NavButton>
          <TbHome />
        </NavButton>
        <NavButton>
          <TbHome />
        </NavButton>

        {/*<div className="hover:shadow-md p-4 rounded-full duration-1000 ease-in-out transform hover:scale-125 delay-200 hover:rotate-180 text-3xl font-bold text-center bg-gradient-to-br from-blue-400 to-white-300 md:p-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-black h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
  </div>*/}
      </div>
    </>
  );
}

export default Header;
