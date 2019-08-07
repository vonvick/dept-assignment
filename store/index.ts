import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const appInitialState = {
  cases: [],
}

export const actionTypes = {
  FILTER_CASES: 'FILTER_CASES',
  FETCH_DATA: 'FETCH_DATA'
}

// REDUCERS
export const reducer = (state = appInitialState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case actionTypes.FILTER_CASES:
      const result = state.cases.filter((item: any) => {
        item.category === payload.category
      });
      return Object.assign({}, state, {
        cases: result
      });
    default:
      return state
  }
}

// ACTIONS
export const filterCases = (payload: any) => {
  return { type: actionTypes.FILTER_CASES, payload }
}

export function initializeStore (initialState = appInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
