import React from 'react'
import Capa from '../assets/Frames/Frame.svg'
import Frame from '../assets/Frames/Frame 13929.svg'
import Capa2 from '../assets/Frames/Capa_1.svg'
import Image from 'next/image'
const Offer = () => {
  return (
    <div>
        <div className="w-[1440px] h-[720px] px-20 py-16 bg-white flex-col justify-start items-center gap-12 inline-flex">
    <div className="text-black text-[40px] font-semibold  tracking-wider">What we offer</div>
    <div className="w-[1312px] justify-start items-start gap-4 inline-flex">
        <div className="grow shrink basis-0 h-[496px] px-14 py-10 bg-white rounded-xl border-2 border-zinc-100 flex-col justify-start items-start gap-10 inline-flex">
            <div className="w-16 h-16 p-3 bg-pink-500 rounded-lg justify-center items-center inline-flex">
                <div className="w-10 h-10 relative flex-col justify-start items-start flex">
                    <div className="w-[39.17px] h-[35.83px] relative">
                        <Image src={Capa} alt="batman"/>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-8 flex">
                <div className="text-neutral-700 text-[32px] font-semibold">UX Stratergy</div>
                <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="text-neutral-700 text-xl font-normal ">UX Research and Data Analysis</div>
                    <div className="text-neutral-700 text-xl font-normal">Surveys and User Interviews</div>
                    <div className="text-neutral-700 text-xl font-normal ">UX Audit</div>
                    <div className="text-neutral-700 text-xl font-normal ">User Flows and Customer Journey</div>
                    <div className="text-neutral-700 text-xl font-normal ">Wireframing</div>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 h-[496px] px-14 py-10 bg-white rounded-xl border-2 border-zinc-100 flex-col justify-start items-start gap-10 inline-flex">
            <div className="w-16 h-16 relative bg-emerald-300 rounded-lg">
            <Image src={Frame} alt="batman"/>
            </div>
            <div className="flex-col justify-start items-start gap-8 flex">
                <div className="text-neutral-700 text-[32px] font-semibold ">UI Design</div>
                <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="text-neutral-700 text-xl font-normal ">UI/UX Design</div>
                    <div className="text-neutral-700 text-xl font-normal ">Web/ Mobile App Design</div>
                    <div className="text-neutral-700 text-xl font-normal ">Interaction Design</div>
                    <div className="text-neutral-700 text-xl font-normal ">Digital Prototyping</div>
                    <div className="text-neutral-700 text-xl font-normal ">Usability Testing</div>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 h-[496px] px-14 py-10 bg-white rounded-xl border-2 border-zinc-100 flex-col justify-start items-start gap-10 inline-flex">
            <div className="w-16 h-16 pl-[11.67px] pr-[12.33px] py-3 bg-indigo-500 rounded-lg justify-center items-center inline-flex">
                <div className="w-10 h-10 relative flex-col justify-start items-start flex">
                    <div className="w-10 h-10 relative">
                    <Image src={Capa2} alt="batman"/>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-8 flex">
                <div className="text-neutral-700 text-[32px] font-semibold ">Brand Design</div>
                <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="text-neutral-700 text-xl font-normal ">Logo design</div>
                    <div className="text-neutral-700 text-xl font-normal ">Branding </div>
                    <div className="text-neutral-700 text-xl font-normal ">UX Audit</div>
                    <div className="text-neutral-700 text-xl font-normal ">User Flows and Customer Journey</div>
                    <div className="text-neutral-700 text-xl font-normal ">Wireframing</div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Offer