import React from 'react';
import dynamic from 'next/dynamic';
import '../../scss/slider.scss';

const ClientSlider = dynamic(() => import('./client-slider'), {
  ssr: false,
});

function Slider() {
  return <ClientSlider />;
}

export default Slider;
