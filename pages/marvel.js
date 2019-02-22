import React from 'react';
import styled from 'styled-components';
import MarvelLogo from '../components/marvel/marvel-logo';
import MarvelGrid from '../components/marvel/marvel-grid';

const Wrapper = styled.section`
  max-width: 1600px;
  margin: 30px auto 100px;
`;

function Marvel() {
  return (
    <Wrapper>
      <MarvelLogo />
      <MarvelGrid />
    </Wrapper>
  );
}

export default Marvel;
