import React from 'react'

const Testimonials = () => {
  return (
    <div>
        <div className="w-[1440px] h-[544px] py-20 bg-white flex-col justify-center items-center gap-16 inline-flex">
    <div className="text-black text-[40px] font-semibold  tracking-wider">What are clients say</div>
    <div className="justify-start items-start gap-6 inline-flex">
        <img className="w-[145px] h-[146.29px] rounded-full" src="https://via.placeholder.com/145x146" />
        <div className="flex-col justify-start items-start gap-[15px] inline-flex">
            <div className="h-[116.19px] relative">
                <div className="w-[631px] h-[65.58px] left-[0.01px] top-[50.61px] absolute text-zinc-500 text-lg font-normal  leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque volutpat semper rutrum tellus viverra at habitasse.</div>
                <div className="w-[666.28px] h-[36.32px] left-[0.02px] top-0 absolute text-zinc-500 text-2xl font-semibold  leading-[30px]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</div>
            </div>
            <div className="justify-start items-start gap-[22px] inline-flex">
                <div className="w-28 h-[42.37px] text-black text-5xl font-normal ">signature</div>
                <div className="w-[152px] h-[42px] text-black text-2xl font-normal ">(Designation)</div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Testimonials