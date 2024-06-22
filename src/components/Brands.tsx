import React from 'react'
import Image from 'next/image'
import tapgro from '../assets/Frames/Tapgrow.svg'
import up from '../assets/Frames/Upstox.svg'
import co from '../assets/Frames/coding.svg'
import web from '../assets/Frames/Webai.svg'
import q from '../assets/Frames/quick.svg'
import GirlBanner from './GirlBanner'

const Brands = () => {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto px-4 py-16 flex flex-col justify-center items-center gap-8">
        <div className="text-center text-neutral-700 text-2xl font-semibold tracking-wide">
          Brands that trust us
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <div className="w-28 md:w-32 lg:w-36 h-auto flex justify-center items-center bg-white p-2">
            <Image src={tapgro} alt="Tapgro" className="w-full h-auto" />
          </div>
          <div className="w-28 md:w-32 lg:w-36 h-auto flex justify-center items-center bg-white p-2">
            <Image src={up} alt="Upstox" className="w-full h-auto" />
          </div>
          <div className="w-28 md:w-32 lg:w-36 h-auto flex justify-center items-center bg-white p-2">
            <Image src={co} alt="Coding" className="w-full h-auto" />
          </div>
          <div className="w-28 md:w-32 lg:w-36 h-auto flex justify-center items-center bg-white p-2">
            <Image src={web} alt="Webai" className="w-full h-auto" />
          </div>
          <div className="w-28 md:w-32 lg:w-36 h-auto flex justify-center items-center bg-white p-2">
            <Image src={q} alt="Quick" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Brands
