import React from 'react';
import styled from 'styled-components';
import MarvelHero, { Image } from './marvel-hero';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr 1fr 3fr;
  grid-template-rows: 0.4fr 0.2fr 0.4fr 1fr;
  gap: 2vw;
  margin: 20px 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  background: red;

  &:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/3;

    clip-path: polygon(0 0, 100% 0, 100% 63%, 0 83%);

    ${Image} {
      clip-path: polygon(
        3px 3px,
        calc(100% - 3px) 3px,
        calc(100% - 3px) calc(63% - 3px),
        3px calc(83% - 3px)
      );
    }
  }

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: 1/3;
  }

  &:nth-child(3) {
    grid-column: 4/6;
    grid-row: 1/2;
  }

  &:nth-child(4) {
    grid-column: 1/2;
    grid-row: 2/4;

    clip-path: polygon(0 22%, 100% 1%, 100% 100%, 0 100%);

    ${Image} {
      clip-path: polygon(
        3px calc(22% + 3px),
        calc(100% - 3px) calc(1% + 3px),
        calc(100% - 3px) calc(100% - 3px),
        3px calc(100% - 3px)
      );
    }
  }

  &:nth-child(5) {
    grid-column: 2/4;
    grid-row: 3/4;
  }

  &:nth-child(6) {
    grid-column: 4/6;
    grid-row: 2/4;
  }

  &:nth-child(7) {
    grid-column: 1/2;
    grid-row: 4/5;
  }

  &:nth-child(8) {
    grid-column: 2/3;
    grid-row: 4/5;
    margin-right: -1vw;
    clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);

    ${Image} {
      clip-path: polygon(
        3px 3px,
        calc(100% - 3px) 3px,
        calc(88% - 3px) calc(100% - 3px),
        3px calc(100% - 3px)
      );
    }
  }

  &:nth-child(9) {
    grid-column: 3/5;
    grid-row: 4/5;
    margin-left: -1vw;
    clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%);

    ${Image} {
      clip-path: polygon(
        calc(12% + 3px) 3px,
        calc(100% - 3px) 3px,
        calc(100% - 3px) calc(100% - 3px),
        3px calc(100% - 3px)
      );
    }
  }

  &:nth-child(10) {
    grid-column: 5/6;
    grid-row: 4/5;
  }
`;

const images = [
  '/static/marvel/1.jpg',
  '/static/marvel/2.jpg',
  '/static/marvel/3.jpg',
  '/static/marvel/4.jpg',
  '/static/marvel/5.jpg',
  '/static/marvel/6.jpg',
  '/static/marvel/7.jpg',
  '/static/marvel/8.jpg',
  '/static/marvel/9.jpg',
  '/static/marvel/10.jpg',
];

function Marvel() {
  const heros = images.map(image => (
    <Item key={image}>
      <MarvelHero imageUrl={image} />
    </Item>
  ));

  return <Grid>{heros}</Grid>;
}

export default Marvel;
