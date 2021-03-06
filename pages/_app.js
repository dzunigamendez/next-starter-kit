import React from 'react';
import App, { Container } from 'next/app';
import Global from '../components/global';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Global>
          <Component {...pageProps} />
        </Global>
      </Container>
    );
  }
}

export default MyApp;
