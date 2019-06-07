import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  grid-template-rows: 40vh 60vh;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  margin: 0;

  &:nth-child(3) {
    grid-column: 3/4;
    grid-row: 1/3;
  }
`;

const Background = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Inner = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 100%;
  min-width: 320px;
  height: 65%;
  padding: 40px;
  transform: translate(-50%, -50%);

  @media (min-width: 700px) {
    padding: 40px 120px;
    height: 75%;
  }

  @media (min-width: 1200px) {
    width: 70%;
  }
`;

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  cursor: grab;
  transform-style: preserve-3d;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.13) rotateX(10deg) rotateY(-7deg) rotateZ(-3deg);
  }
`;

const Image = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
  box-shadow: 0 1px 50px 25px rgba(0, 0, 0, 0.3);
`;

const Text = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 1.1;
  color: white;
  text-align: center;

  @media (min-width: 700px) {
    font-size: 48px;
  }

  @media (min-width: 1200px) {
    font-size: 64px;
  }
`;

const images = [
  '/static/veggies/strawberry.jpg',
  '/static/veggies/pistachios.jpg',
  '/static/veggies/lettuce.jpg',
  '/static/veggies/salad.jpg',
  '/static/veggies/lemon-pepper.jpg',
];

function VeggiesHero() {
  const items = images.map(image => (
    <Item key={image}>
      <Background src={image} />
    </Item>
  ));

  return (
    <Wrapper>
      <List>{items}</List>
      <Inner>
        <Figure>
          <Image src="/static/veggies/chopping-board.jpg" />
          <figcaption>
            <Text>
              Healthy Grids= <br />
              Healthy Websites
            </Text>
          </figcaption>
        </Figure>
      </Inner>
    </Wrapper>
  );
}

export default VeggiesHero;
