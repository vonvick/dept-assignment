import React, { Component } from 'react'
import { initializeStore } from '../store'
import { NextPageContext } from 'next'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

declare global {
  interface Window {
    __NEXT_REDUX_STORE__?: any;
  }
}

interface IApp {
  reduxStore?: any;
}

interface IReduxStore {
  reduxStore?: any;
}

interface IAppContext extends NextPageContext {
  ctx: IReduxStore;
}

function getOrCreateStore (initialState:any = undefined) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }

  return window[__NEXT_REDUX_STORE__]
}

export default (App: any) => {
  return class AppWithRedux extends Component<IApp> {
    private reduxStore: IReduxStore;
    static async getInitialProps (appContext: IAppContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor (props: any) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render () {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
