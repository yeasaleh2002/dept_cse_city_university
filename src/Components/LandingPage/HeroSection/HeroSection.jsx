import React, { Suspense } from 'react';
import { Slider } from '../..';
// import Slider from '../../Slider';

const HeroSection = () => {
  return (
    <div>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Slider /> 
      {/* </Suspense> */}
    </div>
  );
};

export default HeroSection;