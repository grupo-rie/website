"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/comming-soon/lg-1.png',
  '/images/comming-soon/lg-2.png',
  '/images/comming-soon/lg-3.png',
  '/images/comming-soon/lg-4.png',
  '/images/comming-soon/lg-5.png',
  '/images/comming-soon/lg-6.png',
  '/images/comming-soon/lg-7.png',
];

export default function Home() {
  const [index, setIndex] = useState(0);
  //const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      //setFade(true); // Inicia la animación de salida
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        //setFade(false); // Activa la animación de entrada
      }, 300); // Tiempo de la animación de salida
    }, 3000); // Cambio cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="w-72 h-48 relative">
          <Image 
            src={images[index]}
            alt={`Imagen ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className='img-animation'
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Estamos preparando algo nuevo para ti</p>
      </footer>
    </div>
  );
}