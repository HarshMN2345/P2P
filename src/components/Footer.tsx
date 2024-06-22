import Image from 'next/image';
import React from 'react';
import linkedn from '../assets/social/mdi_linkedin.svg';

const Footer = () => {
  return (
    <div className="w-full px-4 py-8 md:px-8 lg:px-20 lg:py-12 bg-white flex flex-col md:flex-row justify-between items-start">
      {/* Left Section */}
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="text-neutral-700 text-lg md:text-xl font-semibold">PixelPerfect</div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            <div className="text-neutral-700 text-base md:text-lg font-medium">About us</div>
            <div className="text-neutral-700 text-base md:text-lg font-medium">Our services</div>
            <div className="text-neutral-700 text-base md:text-lg font-medium">Projects</div>
            <div className="text-neutral-700 text-base md:text-lg font-medium">Testimonials</div>
            <div className="text-neutral-700 text-base md:text-lg font-medium">Contact us</div>
          </div>
          <div className="text-neutral-400 text-sm md:text-base font-normal">©2024 Megha Mahajan. All rights reserved.</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 md:gap-8">
        <div className="w-10 h-10 md:w-12 md:h-12">
          <Image src={linkedn} alt="LinkedIn" layout="responsive" width={32} height={32} />
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12">
          <Image src={linkedn} alt="LinkedIn" layout="responsive" width={32} height={32} />
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12">
          <Image src={linkedn} alt="LinkedIn" layout="responsive" width={32} height={32} />
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12">
          <Image src={linkedn} alt="LinkedIn" layout="responsive" width={32} height={32} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
