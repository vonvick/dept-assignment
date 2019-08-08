import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import _ from 'lodash';
import { createSelector } from 'reselect';
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
  loading: boolean,
  filtersApplied: {
    category: string,
    industry: string,
  }
}

export const appInitialState: AppState = {
  cases: [],
  industries: [],
  categories: [],
  error: '',
  loading: false,
  filtersApplied: {
    category: '',
    industry: '',
  }
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
      const filterState = state.filtersApplied;
      state = Object.assign(state, {
        filtersApplied:
        {
          ...filterState,
          [payload.type]: payload.value
        }
      })

      return {
        ...state
      }
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

const getFiltersApplied = (state: AppState) => state.filtersApplied;
const getCases = (state: AppState) => state.cases;

export const getFilteredCases = createSelector(
  [getFiltersApplied, getCases],
  (appliedFilters: any, cases: any[]) => {
    if (appliedFilters.category && appliedFilters.industry){
      return cases.filter((item: any) => {
        return item.category === appliedFilters.category && item.industry === appliedFilters.industry;
      });

    } else if (appliedFilters.category && !appliedFilters.industry) {
      return cases.filter((item: any) => {
        return item.category === appliedFilters.category;
      });
    } else if (!appliedFilters.category && appliedFilters.industry) {
      return cases.filter((item: any) => {
        return item.industry === appliedFilters.industry;
      });
    } else {
      return cases;
    }
  }
)

export function initializeStore (initialState = appInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
