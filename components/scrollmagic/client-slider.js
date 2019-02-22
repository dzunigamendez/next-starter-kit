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
      <div className="slider__slide">
        <h3 className="slider__title">ONE</h3>
        <div
          className="slider__bg"
          style={{backgroundImage: 'url("/static/slider/slide1.jpg")'}}
        />
      </div>
      <div className="slider__slide">
        <h3 className="slider__title">TWO</h3>
        <div
          className="slider__bg"
          style={{backgroundImage: 'url("/static/slider/slide2.jpg")'}}
        />
      </div>
      <div className="slider__slide">
        <h3 className="slider__title">THREE</h3>
        <div
          className="slider__bg"
          style={{backgroundImage: 'url("/static/slider/slide3.jpg")'}}
        />
      </div>
      <div className="slider__slide">
        <h3 className="slider__title">FOUR</h3>
        <div
          className="slider__bg"
          style={{backgroundImage: 'url("/static/slider/slide4.jpg")'}}
        />
      </div>
    </section>
  );
}

export default ClientSlider;
