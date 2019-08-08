import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import global from'./global/reducer';

const rootReducer = combineReducers({
  global,
  form: formReducer,
});

export default rootReducer;
