import App, { Container } from 'next/app'
import { NextPage, NextPageContext } from 'next';
import React from 'react'
import { ThemeProvider } from 'styled-components'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { initializeStore } from '../store';

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

interface IRedux {
  reduxStore?: any;
}

export type NextPageContextWithRedux = NextPage & NextPageContext & IRedux;

class MyApp extends App<NextPageContextWithRedux> {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp);
