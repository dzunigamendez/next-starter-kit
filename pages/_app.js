import React from 'react';
import App, {Container} from 'next/app';
import {createGlobalStyle} from 'styled-components';
import 'normalize.css/normalize.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
