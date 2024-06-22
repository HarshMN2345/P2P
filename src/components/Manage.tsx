import React from 'react'
import website from '../assets/images/image 6.svg'
import website2 from '../assets/images/12345.png'
import Image from 'next/image'

const Manage = () => {
  return (
    <>
    <div className="w-[1440px] h-[980px] px-20 py-8 bg-white flex-col justify-start items-start gap-12 inline-flex">
    <div className="w-[734px] text-black text-[40px] font-semibold leading-[56px] tracking-wider">And wow, what an impact we have managed to create!</div>
    <div className="w-[1280px] h-[634px] pl-[78px] pt-[71.49px] bg-blue-100 rounded-xl flex-row justify-end items-center inline-flex">
    <div className="w-[734px] h-[634px] px-30 relative bg-white rounded-[25px] flex-col justify-start items-start flex">
        <Image className="800px hover:animate-pulse" src={website} alt="hi" />
    </div>
    <Image className="800px p-2" src={website} alt="hi" />
</div>
</div>
    </>
  )
}

export default Manage