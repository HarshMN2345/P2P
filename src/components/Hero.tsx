import Image from 'next/image';
import React from 'react';
import P from '../assets/Alphabets/P.svg';
import I from '../assets/Alphabets/I.svg';
import X from '../assets/Alphabets/X.svg';
import E from '../assets/Alphabets/E.svg';
import L from '../assets/Alphabets/L.svg';
import Pw from '../assets/Alphabets/Vector (7).svg';
import Ew from '../assets/Alphabets/Vector (8).svg';
import Rw from '../assets/Alphabets/Vector (9).svg';
import Fw from '../assets/Alphabets/Vector (10).svg';
import E2w from '../assets/Alphabets/Vector (11).svg';
import R2w from '../assets/Alphabets/Vector (12).svg';
import Cw from '../assets/Alphabets/Vector (13).svg';
import Tw from '../assets/Alphabets/Vector (14).svg';
import D from '../assets/Alphabets/Vector (15).svg';
import S from '../assets/Alphabets/Vector (17).svg';
import G from '../assets/Alphabets/Vector (19).svg';
import N from '../assets/Alphabets/Vector (20).svg';
import C from '../assets/Alphabets/C.svg';

const Hero = () => {
    return (
        <div className="sm:w-837 md:912 lg:w-full h-auto py-12 flex flex-col justify-start items-center gap-14">
            <div className="flex flex-col justify-start items-center gap-10">
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
                    <div className="flex flex-row">
                        <Image src={P} alt="P" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={I} alt="I" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={X} alt="X" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={C} alt="C" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={E} alt="E" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={L} alt="L" className="w-auto h-10 lg:h-full px-2" />
                    </div>
                    <div className="flex flex-row">
                        <Image src={Pw} alt="P" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={Ew} alt="E" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={Rw} alt="R" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={Fw} alt="F" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={E2w} alt="E" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={Tw} alt="T" className="w-auto h-10 lg:h-full px-2" />
                        <Image src={Cw} alt="C" className="w-auto h-10 lg:h-full px-2" />
                    </div>
                </div>
                <div className="flex flex-row">
                    <Image src={D} alt="D" className="w-auto h-10 lg:h-full px-2" />
                    <Image src={E} alt="E" className="w-auto h-10 lg:h-full px-2" />
                    <Image src={S} alt="S" className="w-auto h-10 lg:h-full px-2" />
                    <Image src={I} alt="I" className="w-auto h-10 lg:h-full px-2" />
                    <Image src={G} alt="G" className="w-auto h-10 lg:h-full px-2" />
                    <Image src={N} alt="N" className="w-auto h-10 lg:h-full px-2" />
                    <Image src={S} alt="S" className="w-auto h-10 lg:h-full px-2" />
                </div>
            </div>
            <div className="w-11/12 lg:w-[651px] text-center text-black text-lg font-normal leading-normal tracking-wide">
                Crafting Intuitive, Engaging, and User-Centric Interfaces to Elevate Your Brand and Drive Success
            </div>
            <div className="w-56 h-16 flex justify-center items-center">
                    <div className="w-56 h-16 relative group">
                        <div className="w-56 h-16 left-0 top-0 absolute bg-black rounded-lg border border-stone-950 group-hover:bg-white" />
                        <div className="w-[148px] h-[31px] left-[38px] top-[16px] absolute text-white text-2xl font-semibold group-hover:text-black">
                            Get in Touch
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Hero;
