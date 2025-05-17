"use client"

import React from 'react';
import Lottie from 'lottie-react';
import Animation from '../../public/Animations/Animation - 1747477825029.json'

 const WhatsAppAnimationSvg = () => {
  return (
    <Lottie
      animationData={Animation}  // Use animationData prop instead of src
      loop={true}
      autoplay={true}
      className='lg:h-24 lg:w-24 md:h-20 md:w-20 w-16 h-16 sm:h-[72px] sm:w-[72px]'
    />
  );
};

export default WhatsAppAnimationSvg;