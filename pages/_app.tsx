import App, { Container } from 'next/app'
import { NextPageContext } from 'next'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { Dispatch } from 'redux';

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export interface AppInitialProps {}

export interface NextPageContextWithRedux extends NextPageContext {
  reduxStore?: {
    dispatch: (prop?: any) => Promise<Dispatch>;
  };
}

interface IAppp {
  reduxStore?: any;
}

class MyApp extends App<IAppp> {
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
