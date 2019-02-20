import React from 'react';
import '../../scss/veggies-hero.scss';

const images = [
  '/static/veggies/strawberry.jpg',
  '/static/veggies/pistachios.jpg',
  '/static/veggies/lettuce.jpg',
  '/static/veggies/salad.jpg',
  '/static/veggies/lemon-pepper.jpg',
];

function VeggiesHero() {
  const items = images.map(image => (
    <li key={image} className="veggies-hero__item">
      <img className="veggies-hero__background" src={image} />
    </li>
  ));

  return (
    <section className="veggies-hero">
      <ul className="veggies-hero__list">{items}</ul>
      <div className="veggies-hero__inner">
        <figure className="veggies-hero__figure">
          <img
            className="veggies-hero__image"
            src="/static/veggies/chopping-board.jpg"
          />
          <figcaption>
            <h3 className="veggies-hero__title">
              Healthy Grids= <br />
              Healthy Websites
            </h3>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default VeggiesHero;
