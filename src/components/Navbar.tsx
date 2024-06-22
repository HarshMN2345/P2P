"use client"
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/Logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[90px] px-6 py-4 bg-white flex justify-between items-center lg:px-16">
      <div className="flex items-center gap-2">
        <div className="w-[58px] h-[58px] flex justify-center items-center">
          <Image src={Logo} alt="pp" height={32} width={32} />
        </div>
        <div className="text-black text-2xl font-medium">
          Pixcel Perfect
        </div>
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`${
        isOpen ? 'block' : 'hidden'
      } absolute top-[90px] left-0 w-full bg-white lg:static lg:flex lg:gap-12 lg:w-auto`}>
        <div className="flex flex-col gap-4 py-4 px-6 lg:flex-row lg:py-0 lg:px-0">
          <div className="text-neutral-900 text-lg font-normal tracking-wide">About us</div>
          <div className="text-neutral-900 text-lg font-normal tracking-wide">Testimonials</div>
          <div className="text-neutral-900 text-lg font-normal tracking-wide">Contact us</div>
          <div className="text-neutral-900 text-lg font-normal tracking-wide">Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
