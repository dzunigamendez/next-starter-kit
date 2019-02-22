import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
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
  position: relative;
  margin: 0;
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

    .marvel-hero__image {
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

    .marvel-hero__image {
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

    .marvel-hero__image {
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

function MarvelHero({imageUrl}) {
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
