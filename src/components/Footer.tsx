import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="w-[1440px] h-[338px] p-20 bg-white justify-between items-start inline-flex">
    <div className="flex-col justify-start items-start gap-16 inline-flex">
        <div className="flex-col justify-start items-start gap-8 flex">
            <div className="text-neutral-700 text-[32px] font-semibold ">PixelPerfect</div>
            <div className="justify-start items-start gap-6 inline-flex">
                <div className="text-neutral-700 text-xl font-medium ">About us</div>
                <div className="text-neutral-700 text-xl font-medium ">Our services</div>
                <div className="text-neutral-700 text-xl font-medium ">Projects</div>
                <div className="text-neutral-700 text-xl font-medium ">Testimonials</div>
                <div className="text-neutral-700 text-xl font-medium ">Contact us</div>
            </div>
        </div>
        <div className="text-neutral-400 text-base font-normal ">©2024 Megha Mahajan. All rights reserved.</div>
    </div>
    <div className="flex-col justify-start items-start gap-6 inline-flex">
        <div className="text-neutral-700 text-xl font-medium ">Find us online</div>
        <div className="justify-start items-center gap-8 inline-flex">
            <div className="w-8 h-8 relative" />
            <div className="w-8 h-8 relative" />
            <div className="w-8 h-8 relative">
                <div className="w-6 h-6 left-[4px] top-[4px] absolute">
                    <div className="w-6 h-6 left-0 top-0 absolute">
                        
                    </div>
                </div>
            </div>
            <div className="w-8 h-8 relative" />
        </div>
    </div>
</div>
    </div>
  )
}

export default Footer