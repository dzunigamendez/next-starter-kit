import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

function Global({ children }) {
  return (
    <main>
      <GlobalStyle />
      {children}
    </main>
  );
}

Global.propTypes = {
  children: PropTypes.any,
};

export default Global;
