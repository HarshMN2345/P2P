import React from 'react'

const Young = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8 md:px-20 md:py-16 bg-white flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4">
        <div className="text-black text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
          We are a young, energetic and unconventionally bold team, with top-notch execution
        </div>
        <div className="text-neutral-500 text-md md:text-lg lg:text-xl font-normal leading-7 tracking-wide">
          Our hunger for taking design risks combined with our growth-focused value system, differentiate us in our stance. We care about your experience because behind every great idea, there is an even better story. For us, the process starts with listening and ceases at satisfaction.
        </div>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-[399px] bg-zinc-300" />
    </div>
  )
}

export default Young
