import React from 'react';
import MarvelHero from './marvel-hero';

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

  return <section className="marvel-grid">{heros}</section>;
}

export default Marvel;
