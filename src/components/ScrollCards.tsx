import React from 'react';
import Image from 'next/image';
import image1 from '../assets/images/2.png';
import image2 from '../assets/images/1.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/7.png';

const images = [image1, image2, image3, image4, image5];

const ScrollCards = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="flex w-[calc(388px*10)] animate-scroll">
        {images.concat(images).map((image, index) => (
          <div key={index} className="w-[388px] h-[430px] flex-shrink-0">
            <Image className="w-full h-full p-4 rounded-xl" alt={`image-${index + 1}`} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollCards;

