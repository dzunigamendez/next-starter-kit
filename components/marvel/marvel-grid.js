import React from 'react';
import styled from 'styled-components';
import MarvelHero from './marvel-hero';

const Grid = styled.section`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr 1fr 3fr;
  grid-template-rows: 0.4fr 0.2fr 0.4fr 1fr;
  margin: 20px 0;
  gap: 2vw;
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
    <MarvelHero key={image} imageUrl={image} />
  ));

  return <Grid>{heros}</Grid>;
}

export default Marvel;
