import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  display: block;
  width: 350px;
  height: auto;
  margin: 0 auto;
`;

function MarvelLogo() {
  return (
    <header>
      <Logo src="/static/marvel/logo.svg" />
    </header>
  );
}

export default MarvelLogo;
