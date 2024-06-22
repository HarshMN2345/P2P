import React from 'react'
import Image from 'next/image';
import star from '../assets/Frames/Star.svg'
import ScrollCards from './ScrollCards';

const Happy = () => {
  return (
    <div>
          <div className="w-[1440px] h-[135.60px] px-4 py-12 justify-center items-center gap-8 inline-flex">
    <div className="text-center text-neutral-700 text-[32px] font-bold  tracking-wider">UX Stratergy </div>
    <Image src={star} alt="hi" className="w-auto h-full px-2"/>
    <div className="text-center text-neutral-700 text-[32px] font-bold  tracking-wider">UIUX Design</div>
    <Image src={star} alt="hi" className="w-auto h-full px-2"/>
    <div className="text-center text-neutral-700 text-[32px] font-bold  tracking-wider">Brand Design </div>
    <Image src={star} alt="hi" className="w-auto h-full px-2"/>
    <div className="text-center text-neutral-700 text-[32px] font-bold  tracking-wider">Graphic Design </div>
</div>
        {/* <div className="w-[1440px] h-[278px] px-4 py-16 justify-center items-center gap-8 inline-flex">
    <div className="w-[261px] px-10 py-8 bg-fuchsia-100 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="flex-col justify-start items-center gap-4 flex">
            <div className="text-center text-neutral-700 text-[40px] font-bold  tracking-wider">10+ </div>
            <div className="text-center text-neutral-700 text-lg font-normal  tracking-wide">Happy Clients</div>
        </div>
    </div>
    <div className="w-[261px] px-10 py-8 bg-green-100 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="flex-col justify-start items-center gap-4 flex">
            <div className="text-center text-neutral-700 text-[40px] font-bold  tracking-wider">4+ </div>
            <div className="text-center text-neutral-700 text-lg font-normal  tracking-wide">Hero&apos;s Member</div>
        </div>
    </div>
    <div className="w-[261px] px-10 py-8 bg-rose-100 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="flex-col justify-start items-center gap-4 flex">
            <div className="text-center text-neutral-700 text-[40px] font-bold  tracking-wider">20+ </div>
            <div className="text-center text-neutral-700 text-lg font-normal  tracking-wide">Project Done</div>
        </div>
    </div>
    <div className="w-[261px] px-10 py-8 bg-slate-200 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="flex-col justify-start items-center gap-4 flex">
            <div className="w-[57px] text-center text-neutral-700 text-[40px] font-bold  tracking-wider">5</div>
            <div className="text-center text-neutral-700 text-lg font-normal  tracking-wide">Years Experience</div>
        </div>
    </div>
</div> */}
     <ScrollCards/>
    </div>
  )
}

export default Happy