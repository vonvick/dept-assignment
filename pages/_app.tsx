import App, { Container } from 'next/app'
import { NextPage, NextPageContext } from 'next';
import React from 'react'
import { ThemeProvider } from 'styled-components'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux';
import { persistStore, Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

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
  private persistor: Persistor;

  constructor(props: any) {
    super(props);
    this.persistor = persistStore(this.props.reduxStore);
  }
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <PersistGate persistor={this.persistor}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp);
