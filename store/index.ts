import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import reducer from './reducer';

// types
import { AppState } from '../types/state';

const appInitialState:AppState = {
  global: {
    cases: [],
    industries: [],
    categories: [],
    error: '',
    loading: false,
    filtersApplied: {
      category: '',
      industry: '',
    },
  },
  form: {}
}


const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

export function initializeStore (initialState = appInitialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
