import React from 'react'
import Image from 'next/image'
import tee from '../assets/images/12.jpeg'

const GirlBanner = () => {
  return (
    <div className='w-full max-w-screen-xl mx-auto py-12 flex flex-col justify-start items-center gap-8'>
      <div className="w-full max-w-2xl p-6 bg-teal-50 rounded-2xl border border-emerald-300 flex flex-col justify-start items-center gap-6">
        <div className="text-center text-neutral-700 text-lg md:text-xl lg:text-2xl font-normal leading-relaxed">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque volutpat semper rutrum tellus viverra at habitasse ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque volutpat semper rutrum tellus viverra at habitasse.”
        </div>
        <div className="flex justify-start items-center gap-3">
          <Image className="w-12 h-12 md:w-14 md:h-14 rounded-full" src={tee} alt="girl" />
          <div className="flex flex-col justify-start items-start gap-1">
            <div className="text-black text-base md:text-lg lg:text-xl font-semibold tracking-wide">Abhishek Jannu</div>
            <div className="text-zinc-500 text-sm md:text-md font-medium leading-snug">“Lorem ipsum dolor sit amet,”</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GirlBanner
