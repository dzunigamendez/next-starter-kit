import React from 'react';
import PropTypes from 'prop-types';

function MarvelHero({imageUrl}) {
  return (
    <figure className="marvel-hero">
      <img className="marvel-hero__image" src={imageUrl} />
    </figure>
  );
}

MarvelHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default MarvelHero;
