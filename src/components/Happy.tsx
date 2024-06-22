import React from 'react'
import Image from 'next/image';
import star from '../assets/Frames/Star.svg'
import ScrollCards from './ScrollCards';

const Happy = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center py-12 gap-4 md:gap-8">
        <div className="text-center text-neutral-700 text-lg md:text-2xl lg:text-3xl font-bold tracking-wider">UX Strategy</div>
        <Image src={star} alt="star" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        <div className="text-center text-neutral-700 text-lg md:text-2xl lg:text-3xl font-bold tracking-wider">UIUX Design</div>
        <Image src={star} alt="star" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        <div className="text-center text-neutral-700 text-lg md:text-2xl lg:text-3xl font-bold tracking-wider">Brand Design</div>
        <Image src={star} alt="star" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        <div className="text-center text-neutral-700 text-lg md:text-2xl lg:text-3xl font-bold tracking-wider">Graphic Design</div>
        <Image src={star} alt="star" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </div>
      <ScrollCards/>
    </div>
  )
}

export default Happy
