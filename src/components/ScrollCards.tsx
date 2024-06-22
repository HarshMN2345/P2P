import React from 'react'
import image1 from '../assets/images/2.png'
import image2 from '../assets/images/1.png'
import image3 from '../assets/images/3.png'
import image4 from '../assets/images/4.png'
import image5 from '../assets/images/7.png'
import Image from 'next/image'

const ScrollCards = () => {
  return (
    <div>
        <div className="w-[2068px] h-[494px] py-8 justify-start items-start gap-8 inline-flex">
    <Image className="w-[388px] h-[430px] rounded-xl" alt="1" src={image1} />
    <Image className="w-[388px] h-[430px] rounded-xl" alt="1" src={image2} />
    <Image className="w-[388px] h-[430px] rounded-xl" alt="1" src={image3} />
    <Image className="w-[388px] h-[430px] rounded-xl" alt="1" src={image4} />
    <Image className="w-[388px] h-[430px] rounded-xl" alt="1" src={image5} />
</div>
 <div>
    
 </div>
    </div>
  )
}

export default ScrollCards