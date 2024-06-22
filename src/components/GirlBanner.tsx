import React from 'react'
import Image from 'next/image'
import tee from '../assets/images/12.jpeg'

const GirlBanner = () => {
  return (
    <div className='w-[1440px] h-[598px] py-12 flex-col justify-start items-center gap-14 inline-flex'>
        <div className="w-[862px] h-[331px] p-30 py-10 bg-teal-50 rounded-[25px] border border-emerald-300 flex-col justify-start items-center gap-10 inline-flex">
    <div className="w-[788.95px] text-center text-neutral-700 text-[22px] font-normal  leading-loose">“LLorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque volutpat semper rutrum tellus viverra at habitasse  ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque volutpat semper rutrum tellus viverra at habitasse.”</div>
    <div className="justify-start items-center gap-3 inline-flex">
    <Image className="w-14 h-14 rounded-full" src={tee} alt="girl" />
        <div className="flex-col justify-start items-start gap-1 inline-flex ">
            <div className="text-black text-xl font-semibold tracking-wide">Abhishek Jannu</div>
            <div className="text-zinc-500 text-md font-medium  leading-[30px]">“LLorem ipsum dolor sit amet,</div>
        </div>
    </div>
</div>
      </div>
  )
}

export default GirlBanner