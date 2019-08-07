import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';

import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  SET_FILTER_CRITERIA,
} from './action-types';

export const fetchDataBegin = createAction(FETCH_DATA_BEGIN);
export const fetchDataError = createAction(FETCH_DATA_ERROR);
export const fetchDataSuccess = createAction(FETCH_DATA_SUCCESS);
export const setFilterCriteria = createAction(SET_FILTER_CRITERIA);

export const getCasesData = () => async (dispatch: Dispatch): Promise<any> => {
  try {
    dispatch(fetchDataBegin());
    const result = await fetchData();

    dispatch(fetchDataSuccess(result.json()));
    dispatch(setFilterCriteria(result.json()));

    return result.json();
  } catch (error) {
    dispatch(fetchDataError(error))
  }
}

const handleErrors = (response: any) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const fetchData = () => {
  return fetch('https://my-json-server.typicode.com/vonvick/dept-assignment/data')
    .then(handleErrors)
    .then(res => res.json());
}
