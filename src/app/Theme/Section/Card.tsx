import React from 'react';

export default function Card({
  children,
  img,
  w,
  h,
}: {
  children?: React.ReactNode;
  img?: string;
  w?: string;
  h?: string;
}) {
  return (
    <>
      <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-n-light-purple">
        {img ? <img className="w-full" src={img} alt="cardimg" /> : <></>}
        <div className="px-6 pt-6 pb-20">{children}</div>
      </div>
    </>
  );
}
