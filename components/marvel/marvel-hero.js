import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(
    3px 3px,
    calc(100% - 3px) 3px,
    calc(100% - 3px) calc(100% - 3px),
    3px calc(100% - 3px)
  );
`;

const Figure = styled.figure`
  width: 100%;
  height: 100%;
  margin: 0;
`;

function MarvelHero({ imageUrl }) {
  return (
    <Figure>
      <Image src={imageUrl} />
    </Figure>
  );
}

MarvelHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default MarvelHero;
