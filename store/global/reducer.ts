import { handleActions } from 'redux-actions';
import _ from 'lodash';
import { createSelector } from 'reselect';

// Types
import { GlobalState, AppState } from '../../types/state';
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  SET_FILTER_CRITERIA,
  PERFORM_DATA_FILTER
} from '../action-types';

export const appInitialState: GlobalState = {
  cases: [],
  industries: [],
  categories: [],
  error: '',
  loading: false,
  filtersApplied: {
    category: '',
    industry: '',
  },
}

const getFiltersApplied = ({ global }: AppState) => global.filtersApplied;
const getCases = ({ global }: AppState) => global.cases;

export const getFilteredCases = createSelector([getFiltersApplied, getCases], (appliedFilters: any, cases: any[]) => {
  if (appliedFilters.category && appliedFilters.industry) {
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
})


export default handleActions(
  {
    [FETCH_DATA_BEGIN]: (state, { payload }) => {
      return {
        ...state,
        loading: true,
        error: ''
      }
    },

    [FETCH_DATA_ERROR]: (state, { payload }: { payload: any }) => {
      return {
        ...state,
        loading: false,
        error: payload
      }
    },

    [PERFORM_DATA_FILTER]: (state, { payload }: { payload: any }) => {
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
    },

    [FETCH_DATA_SUCCESS]: (state, { payload }: { payload: any }) => {
      return {
        ...state,
        loading: false,
        cases: payload
      }

    },

    [SET_FILTER_CRITERIA]: (state, { payload }: { payload: any }) => {
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
    }
  },
  appInitialState
)
