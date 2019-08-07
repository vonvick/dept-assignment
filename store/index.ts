import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import _ from 'lodash';
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  SET_FILTER_CRITERIA,
  PERFORM_DATA_FILTER
} from './action-types';

export interface AppState {
  cases: any[],
  industries: any[],
  categories: any[],
  error: string,
  loading: boolean
}

export const appInitialState: AppState = {
  cases: [],
  industries: [],
  categories: [],
  error: '',
  loading: false
}

// REDUCERS
export const reducer = (state = appInitialState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case PERFORM_DATA_FILTER:
      const result = state.cases
        .filter((item: any) => {
          if (payload.category) {
            return item.category === payload.category
          }
          return item;
        })
        .filter((item: any) => {
          if (payload.industry) {
            return item.industry === payload.industry
          }
          return item;
        })
      return Object.assign({}, state, {
        cases: result
      });
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        cases: payload
      }
    case SET_FILTER_CRITERIA:
      const filterData = payload.reduce((acc: any, curr: any) => {
        acc.categories.push(curr.category);
        acc.industries.push(curr.industry);
        return acc;
      }, { categories: [], industries: []});

      const uniqCategories = _.uniq(filterData.categories);
      const uniqIndustries = _.uniq(filterData.industries);

      return {
        ...state,
        industries: uniqIndustries,
        categories: uniqCategories
      }
    default:
      return state
  }
}

export function initializeStore (initialState = appInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
