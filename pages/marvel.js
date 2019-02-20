import React from 'react';
import MarvelHero from '../components/marvel/marvel-hero';
import '../scss/marvel.scss';

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

  return (
    <main className="marvel">
      <header>
        <img className="marvel__logo" src="/static/marvel/logo.svg" />
      </header>
      <section className="marvel__list">{heros}</section>
    </main>
  );
}

export default Marvel;
