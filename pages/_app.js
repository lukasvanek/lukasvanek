import * as React from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import { Header, Footer } from '../components';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    // <link rel="canonical" href={props.location.href} />
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    );
  }
}
