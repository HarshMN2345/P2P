import React from 'react';

const Work = () => {
  return (
    <>
      <div className="w-[1440px] h-[2341px] px-20 py-16 bg-white flex-col justify-start items-center gap-12 inline-flex">
        {/* Title */}
        <div className="text-black text-[40px] font-semibold  tracking-wider">Our work</div>
        
        {/* First Row */}
        <div className="self-stretch justify-start items-center gap-8 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 h-[496px] px-14 py-10 bg-white rounded-xl border-2 border-zinc-100 flex-col justify-start items-start gap-10 inline-flex">
                <div className="w-[519px] h-[332.16px] relative bg-white">
                  {/* Example nested structure, possibly for images */}
                  <div className="left-0 top-[-143.24px] absolute justify-start items-start inline-flex">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="w-[86.50px] h-[86.50px] rounded-[9.54px] border border-zinc-100" />
                    ))}
                  </div>
                  <div className="left-0 top-[-56.74px] absolute justify-start items-start inline-flex">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="w-[86.50px] h-[86.50px] rounded-[9.54px] border border-zinc-100" />
                    ))}
                  </div>
                  <div className="left-0 top-[29.76px] absolute justify-start items-start inline-flex">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="w-[86.50px] h-[86.50px] rounded-[9.54px] border border-zinc-100" />
                    ))}
                  </div>
                  <div className="left-0 top-[116.26px] absolute justify-start items-start inline-flex">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="w-[86.50px] h-[86.50px] rounded-[9.54px] border border-zinc-100" />
                    ))}
                  </div>
                  <div className="left-0 top-[202.76px] absolute justify-start items-start inline-flex">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="w-[86.50px] h-[86.50px] rounded-[9.54px] border border-zinc-100" />
                    ))}
                  </div>
                  <div className="left-0 top-[289.26px] absolute justify-start items-start inline-flex">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="w-[86.50px] h-[86.50px] rounded-[9.54px] border border-zinc-100" />
                    ))}
                  </div>
                  <div className="left-0 top-[375.76px] absolute justify-start items-start inline-flex">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="w-[86.50px] h-[86.50px] rounded-[9.54px] border border-zinc-100" />
                    ))}
                  </div>
                  <div className="w-[485px] h-[259.50px] left-0 top-[485px] absolute origin-top-left -rotate-90 bg-gradient-to-b from-white to-white" />
                  <div className="w-[485px] h-[259.50px] left-[485px] top-[548.83px] absolute origin-top-left -rotate-180 bg-gradient-to-b from-white via-white to-white" />
                  <div className="w-[645.47px] h-[550.02px] left-[16.11px] top-[-333.47px] absolute bg-white rounded-full" />
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="w-[513px] text-neutral-700 text-xl font-medium  leading-loose">
                Streamlining Legal Data Management for Unicourt, the biggest court records platform in USA
              </div>
              <div className="px-3 py-1 bg-pink-500 rounded justify-center items-center gap-2.5 flex">
                <div className="text-white text-xl font-medium  leading-loose">Fintech</div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 h-[496px] px-14 py-10 bg-white rounded-xl border-2 border-zinc-100" />
            </div>
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="w-[506px] text-neutral-700 text-xl font-medium  leading-loose">
                Streamlining Legal Data Management for Unicourt, the biggest court records platform in USA
              </div>
              <div className="px-3 py-1 bg-pink-500 rounded justify-center items-center gap-2.5 flex">
                <div className="text-white text-xl font-medium  leading-loose">Fintech</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="w-[1312px] justify-start items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 h-[496px] px-14 py-10 bg-white rounded-xl border-2 border-zinc-100" />
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="w-[904px] text-neutral-700 text-xl font-medium  leading-loose">
              Streamlining Legal Data Management for Unicourt, the biggest court records platform in USA
            </div>
            <div className="px-3 py-1 bg-pink-500 rounded justify-center items-center gap-2.5 flex">
              <div className="text-white text-xl font-medium  leading-loose">Fintech</div>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="self-stretch justify-start items-center gap-8 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 h-[496px] px-14 py-10 bg-white rounded-xl border-2 border-zinc-100" />
            </div>
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="w-[506px] text-neutral-700 text-xl font-medium  leading-loose">
                Streamlining Legal Data Management for Unicourt, the biggest court records platform in USA
              </div>
              <div className="px-3 py-1 bg-pink-500 rounded justify-center items-center gap-2.5 flex">
                <div className="text-white text-xl font-medium  leading-loose">Fintech</div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 h-[496px] px-14 py-10 bg-white rounded-xl border-2 border-zinc-100" />
            </div>
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="w-[506px] text-neutral-700 text-xl font-medium  leading-loose">
                Streamlining Legal Data Management for Unicourt, the biggest court records platform in USA
              </div>
              <div className="px-3 py-1 bg-pink-500 rounded justify-center items-center gap-2.5 flex">
                <div className="text-white text-xl font-medium  leading-loose">Fintech</div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="w-[1312px] justify-start items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 h-[496px] px-14 py-10 bg-white rounded-xl border-2 border-zinc-100" />
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="w-[904px] text-neutral-700 text-xl font-medium  leading-loose">
              Streamlining Legal Data Management for Unicourt, the biggest court records platform in USA
            </div>
            <div className="px-3 py-1 bg-pink-500 rounded justify-center items-center gap-2.5 flex">
              <div className="text-white text-xl font-medium  leading-loose">Fintech</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
