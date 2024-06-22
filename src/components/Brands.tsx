import React from 'react'
import tapgro from '../assets/Frames/Tapgrow.svg'
import up from '../assets/Frames/Upstox.svg'
import co from '../assets/Frames/coding.svg'
import web from '../assets/Frames/Webai.svg'
import q from '../assets/Frames/quick.svg'
import tee from '../assets/images/12.jpeg'
import Image from 'next/image'
import GirlBanner from './GirlBanner'

const Brands = () => {
  return (
    <>
    <div className="w-[1440px] h-[245px] px-4 py-16 flex-col justify-center items-center gap-12 inline-flex">
    <div className="text-center text-neutral-700 text-2xl font-semibold tracking-wide">Brands that trust us</div>
    <div className="justify-start items-start gap-[26px] inline-flex">
        <div className="w-[141.09px] h-10 relative bg-white">
            <div className="w-[122.36px] h-[32.65px] left-[9.37px] top-[3.37px] absolute">
                    <Image src={tapgro} className="w-[107.26px] h-[30.60px]" alt="u" />
            </div>
        </div>
        <div className="w-[141.09px] h-10 relative bg-white">
            <div className="w-[122.36px] h-[32.65px] left-[9.37px] top-[3.37px] absolute">
                    <Image src={up} className="w-[107.26px] h-[30.60px]" alt="u" />
            </div>
        </div>
        <div className="w-[141.09px] h-10 relative bg-white">
            <div className="w-[122.36px] h-[32.65px] left-[9.37px] top-[3.37px] absolute">
                    <Image src={co} className="w-[107.26px] h-[30.60px]" alt="u" />
            </div>
        </div>
        <div className="w-[141.09px] h-10 relative bg-white">
            <div className="w-[122.36px] h-[32.65px] left-[9.37px] top-[3.37px] absolute">
                    <Image src={web} className="w-[107.26px] h-[30.60px]" alt="u" />
            </div>
        </div>
        <div className="w-[141.09px] h-10 relative bg-white">
            <div className="w-[122.36px] h-[32.65px] left-[9.37px] top-[3.37px] absolute">
                    <Image src={q} className="w-[107.26px] h-[30.60px]" alt="u" />
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Brands