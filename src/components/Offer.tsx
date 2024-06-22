import React from 'react'
import Image from 'next/image'
import Capa from '../assets/Frames/Frame.svg'
import Frame from '../assets/Frames/Frame 13929.svg'
import Capa2 from '../assets/Frames/Capa_1.svg'

const Offer = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-12 flex flex-col justify-start items-center gap-8">
      <div className="text-black text-3xl md:text-4xl font-semibold tracking-wider">What we offer</div>
      <div className="w-full flex flex-wrap justify-center items-start gap-8">
        <div className="flex-grow flex-shrink-0 w-full md:w-1/3 p-4 bg-white rounded-xl border-2 border-zinc-100 flex flex-col justify-start items-start gap-6">
          <div className="w-16 h-16 p-3 bg-pink-500 rounded-lg flex justify-center items-center">
            <Image src={Capa} alt="batman" width={40} height={36} />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-neutral-700 text-xl md:text-2xl font-semibold">UX Strategy</div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-neutral-700 text-md md:text-lg">UX Research and Data Analysis</div>
              <div className="text-neutral-700 text-md md:text-lg">Surveys and User Interviews</div>
              <div className="text-neutral-700 text-md md:text-lg">UX Audit</div>
              <div className="text-neutral-700 text-md md:text-lg">User Flows and Customer Journey</div>
              <div className="text-neutral-700 text-md md:text-lg">Wireframing</div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex-shrink-0 w-full md:w-1/3 p-4 bg-white rounded-xl border-2 border-zinc-100 flex flex-col justify-start items-start gap-6">
          <div className="w-16 h-16 bg-emerald-300 rounded-lg flex justify-center items-center">
            <Image src={Frame} alt="batman" width={40} height={40} />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-neutral-700 text-xl md:text-2xl font-semibold">UI Design</div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-neutral-700 text-md md:text-lg">UI/UX Design</div>
              <div className="text-neutral-700 text-md md:text-lg">Web/Mobile App Design</div>
              <div className="text-neutral-700 text-md md:text-lg">Interaction Design</div>
              <div className="text-neutral-700 text-md md:text-lg">Digital Prototyping</div>
              <div className="text-neutral-700 text-md md:text-lg">Usability Testing</div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex-shrink-0 w-full md:w-1/3 p-4 bg-white rounded-xl border-2 border-zinc-100 flex flex-col justify-start items-start gap-6">
          <div className="w-16 h-16 bg-indigo-500 rounded-lg flex justify-center items-center">
            <Image src={Capa2} alt="batman" width={40} height={40} />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-neutral-700 text-xl md:text-2xl font-semibold">Brand Design</div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-neutral-700 text-md md:text-lg">Logo design</div>
              <div className="text-neutral-700 text-md md:text-lg">Branding</div>
              <div className="text-neutral-700 text-md md:text-lg">UX Audit</div>
              <div className="text-neutral-700 text-md md:text-lg">User Flows and Customer Journey</div>
              <div className="text-neutral-700 text-md md:text-lg">Wireframing</div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex-shrink-0 w-full md:w-1/3 p-4 bg-white rounded-xl border-2 border-zinc-100 flex flex-col justify-start items-start gap-6">
          <div className="w-16 h-16 bg-emerald-300 rounded-lg flex justify-center items-center">
            <Image src={Frame} alt="batman" width={40} height={40} />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-neutral-700 text-xl md:text-2xl font-semibold">UI Design</div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-neutral-700 text-md md:text-lg">UI/UX Design</div>
              <div className="text-neutral-700 text-md md:text-lg">Web/Mobile App Design</div>
              <div className="text-neutral-700 text-md md:text-lg">Interaction Design</div>
              <div className="text-neutral-700 text-md md:text-lg">Digital Prototyping</div>
              <div className="text-neutral-700 text-md md:text-lg">Usability Testing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
