import Image from 'next/image'
import React from 'react'
import P from '../assets/Alphabets/P.svg'
import I from '../assets/Alphabets/I.svg'
import X from '../assets/Alphabets/X.svg'
import E from '../assets/Alphabets/E.svg'
import L from '../assets/Alphabets/L.svg'
import Pw from '../assets/Alphabets/Vector (7).svg'
import Ew from '../assets/Alphabets/Vector (8).svg'
import Rw from '../assets/Alphabets/Vector (9).svg'
import Fw from '../assets/Alphabets/Vector (10).svg'
import E2w from '../assets/Alphabets/Vector (11).svg'
import R2w from '../assets/Alphabets/Vector (12).svg'
import Cw from '../assets/Alphabets/Vector (13).svg'
import Tw from '../assets/Alphabets/Vector (14).svg'
import D from '../assets/Alphabets/Vector (15).svg'
import S from '../assets/Alphabets/Vector (17).svg'
import G from '../assets/Alphabets/Vector (19).svg'
import N from '../assets/Alphabets/Vector (20).svg'


const Hero = () => {
    return (
        <div>
            <div className="w-[1440px] h-[498px] py-12 flex-col justify-start items-center gap-14 inline-flex">
                <div className="h-[194.91px] flex flex-col justify-start items-center gap-10">
                    <div className="flex justify-center items-start gap-8">
                        <div className="w-[298.53px] h-[75.37px] flex flex-row">
                            <Image src={P} alt="P" className="w-auto h-full px-2" />
                            <Image src={I} alt="I" className="w-auto h-full px-2" />
                            <Image src={X} alt="X" className="w-auto h-full px-2" />
                            <Image src={E} alt="E" className="w-auto h-full px-2" />
                            <Image src={L} alt="L" className="w-auto h-full px-2" />
                        </div>
                        <div className="w-[484.50px] h-[77.44px] relative  flex flex-row">
                            <Image src={Pw} alt="P" className="w-auto h-full px-2" />
                            <Image src={Ew} alt="I" className="w-auto h-full px-2" />
                            <Image src={Rw} alt="X" className="w-auto h-full px-2" />
                            <Image src={Fw} alt="E" className="w-auto h-full px-2" />
                            <Image src={Ew} alt="L" className="w-auto h-full px-2" />
                            <Image src={Tw} alt="L" className="w-auto h-full px-2" />
                            <Image src={Cw} alt="E" className="w-auto h-full px-2" />
                        </div>
                    </div>
                    <div className="h-[77.47px] relative  flex flex-row">
                    <Image src={D} alt="P" className="w-auto h-full px-2" />
                            <Image src={E} alt="I" className="w-auto h-full px-2" />
                            <Image src={S} alt="X" className="w-auto h-full px-2" />
                            <Image src={I} alt="E" className="w-auto h-full px-2" />
                            <Image src={G} alt="L" className="w-auto h-full px-2" />
                            <Image src={N} alt="L" className="w-auto h-full px-2" />
                            <Image src={S} alt="E" className="w-auto h-full px-2" />
                    </div>
                </div>
                <div className="w-[651px] text-center text-black text-lg font-normal leading-normal tracking-wide">Crafting Intuitive, Engaging, and User-Centric Interfaces to Elevate Your Brand and Drive Success</div>
                <div className="w-56 h-16 flex justify-center items-center">
                    <div className="w-56 h-16 relative group">
                        <div className="w-56 h-16 left-0 top-0 absolute bg-black rounded-lg border border-stone-950 group-hover:bg-white" />
                        <div className="w-[148px] h-[31px] left-[38px] top-[16px] absolute text-white text-2xl font-semibold group-hover:text-black">
                            Get in Touch
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero