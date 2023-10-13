import React from 'react';
import Container from '../Theme/Section/Container';
import Card from '../Theme/Section/Card';

export default function Services() {
  return (
    <Container>
      <>
        <div className="flex items-center ">
          <h1 className="bg-sky-500 p-2 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
            Criamos softwares de complexidades variadas para todos os nichos.
          </h1>
        </div>
        <p className="mb-6 text-lg font-normal text-gray-500">
          Tenha todo o apoio técnico nos projetos de tecnologia da sua empresa.
        </p>
        <div className="flex flex-row-reverse">
          <Card>
            <h2 className="flex items-center bg-n-light-purple text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
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
              &nbsp;&nbsp; Upgrade de Software
            </h2>
            <p>
              Desenvolvemos novas funcionalidades para softwares que estão
              ativos e precisam de atualizações.
            </p>
          </Card>
          <Card>
            <h2 className="flex items-center bg-n-light-purple text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
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
              &nbsp;&nbsp; Novos Softwares
            </h2>
            <p>
              Entregamos soluções desenvolvidas do zero e de acordo com as
              necessidades dos seus negócios, desde o conceito até a
              implementação.
            </p>
          </Card>
        </div>
        <div className="flex flex-row-reverse">
          <Card>
            <h2 className="flex items-center bg-n-light-purple text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
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
              &nbsp;&nbsp; Softwares em Desenvolvimento
            </h2>
            <p>
              Destrave projetos que tiveram o seu desenvolvimento interrompido.
              Avaliamos o cenário atual para compreender a situação e oferecemos
              as soluções necessárias para que o seu software seja finalizado.
            </p>
          </Card>
        </div>
      </>
    </Container>
  );
}
