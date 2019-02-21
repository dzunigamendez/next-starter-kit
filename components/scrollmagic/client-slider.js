import React, {useEffect} from 'react';
import TimelineMax from 'TimelineMax';
import {Linear} from 'TweenLite';
import ScrollMagic from 'ScrollMagic';
import 'AnimationGsap';

function ClientSlider() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()
      .fromTo(
        '.slider__slide:nth-child(2)',
        1,
        {x: '-100%'},
        {x: '0%', ease: Linear.easeNone},
      ) // in from left
      .fromTo(
        '.slider__slide:nth-child(3)',
        1,
        {x: '100%'},
        {x: '0%', ease: Linear.easeNone},
      ) // in from right
      .fromTo(
        '.slider__slide:nth-child(4)',
        1,
        {y: '-100%'},
        {y: '0%', ease: Linear.easeNone},
      ); // in from top

    new ScrollMagic.Scene({
      triggerElement: '.slider',
      triggerHook: 'onLeave',
      duration: '300%',
    })
      .setPin('.slider')
      .setTween(wipeAnimation)
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }, []);

  return (
    <section className="slider">
      <div className="slider__slide">ONE</div>
      <div className="slider__slide">TWO</div>
      <div className="slider__slide">THREE</div>
      <div className="slider__slide">FOUR</div>
    </section>
  );
}

export default ClientSlider;
