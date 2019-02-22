import React from 'react';
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('../components/scrollmagic/slider'), {
  ssr: false,
});

function ScrollMagic() {
  return (
    <main className="scrollmagic">
      <Slider />
    </main>
  );
}

export default ScrollMagic;
