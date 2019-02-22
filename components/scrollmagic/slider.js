import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import { Linear } from 'TweenLite';
import 'AnimationGsap';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 48px;
  width: 100%;
  margin: 0;
  padding: 30px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: center center / cover no-repeat;
`;

function Slider() {
  const slider = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);
  const slide4 = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()
      .fromTo(
        slide2.current,
        1,
        { x: '-100%' },
        { x: '0%', ease: Linear.easeNone },
      ) // in from left
      .fromTo(
        slide3.current,
        1,
        { x: '100%' },
        { x: '0%', ease: Linear.easeNone },
      ) // in from right
      .fromTo(
        slide4.current,
        1,
        { y: '-100%' },
        { y: '0%', ease: Linear.easeNone },
      ); // in from top

    new ScrollMagic.Scene({
      triggerElement: slider.current,
      triggerHook: 'onLeave',
      duration: '300%',
    })
      .setPin(slider.current)
      .setTween(wipeAnimation)
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }, []);

  return (
    <Container ref={slider}>
      <Slide>
        <Title>ONE</Title>
        <Background
          style={{ backgroundImage: 'url("/static/slider/slide1.jpg")' }}
        />
      </Slide>
      <Slide ref={slide2}>
        <Title>TWO</Title>
        <Background
          style={{ backgroundImage: 'url("/static/slider/slide2.jpg")' }}
        />
      </Slide>
      <Slide ref={slide3}>
        <Title>THREE</Title>
        <Background
          style={{ backgroundImage: 'url("/static/slider/slide3.jpg")' }}
        />
      </Slide>
      <Slide ref={slide4}>
        <Title>FOUR</Title>
        <Background
          style={{ backgroundImage: 'url("/static/slider/slide4.jpg")' }}
        />
      </Slide>
    </Container>
  );
}

export default Slider;
