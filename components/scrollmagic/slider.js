import React from 'react';
import dynamic from 'next/dynamic';

const ClientSlider = dynamic(() => import('./client-slider'), {
  ssr: false,
});

function Slider() {
  return <ClientSlider />;
}

export default Slider;
