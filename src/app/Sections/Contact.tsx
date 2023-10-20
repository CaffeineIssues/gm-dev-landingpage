import React from 'react';

export default function Contact() {
  return (
    <div
      id="contact"
      className="z-[-1] flex items-center justify-center h-screen mt-[-2em] min-h-full bg-cover bg-no-repeat bg-center p-12 bg-[#02054B]"
    >
      <div className="flex-column items-center justify-center p-12 bg-white w-1/2 rounded-3xl">
        <div className="flex items-center justify-center bg-white pb-8">
          <h1 className=" text-xl font-extrabold leading-none tracking-tight text-n-dark-purple md:text-5xl lg:text-4xl dark:text-n-dark-purple">
            Contato
          </h1>
        </div>
        <div className="w-full">
          <form action="#" method="POST">
            <div className="mb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome Completo"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="empresa"
                id="empresa"
                placeholder="Empresa"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <textarea
                name="message"
                id="message"
                placeholder="Detalhes do projeto"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>

            <div>
              <button className="hover:bg-sky-300 rounded-md bg-sky-500 py-3 px-8 text-base font-semibold text-white outline-none">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
