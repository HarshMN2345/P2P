import Image from 'next/image';
import React from 'react';
import linkedn from '../assets/social/mdi_linkedin.svg';

const Footer = () => {
  return (
    <div className="w-full p-20 bg-white flex justify-between items-start">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <div className="text-neutral-700 text-[32px] font-semibold">PixelPerfect</div>
          <div className="flex gap-6">
            <div className="text-neutral-700 text-xl font-medium">About us</div>
            <div className="text-neutral-700 text-xl font-medium">Our services</div>
            <div className="text-neutral-700 text-xl font-medium">Projects</div>
            <div className="text-neutral-700 text-xl font-medium">Testimonials</div>
            <div className="text-neutral-700 text-xl font-medium">Contact us</div>
          </div>
        </div>
        <div className="text-neutral-400 text-base font-normal">©2024 Megha Mahajan. All rights reserved.</div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-neutral-700 text-xl font-medium">Find us online</div>
        <div className="flex gap-8">
          <div className="w-8 h-8">
            <Image src={linkedn} alt="LinkedIn" layout="responsive" width={32} height={32} />
          </div>
          <div className="w-8 h-8">
            <Image src={linkedn} alt="LinkedIn" layout="responsive" width={32} height={32} />
          </div>
          <div className="w-8 h-8">
            <Image src={linkedn} alt="LinkedIn" layout="responsive" width={32} height={32} />
          </div>
          <div className="w-8 h-8">
            <Image src={linkedn} alt="LinkedIn" layout="responsive" width={32} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
