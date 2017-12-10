import { combineReducers } from 'redux';
import { snackbarReducer } from 'react-redux-snackbar';

import weather from './weather';


const root = combineReducers({
  weather,
  snackbar: snackbarReducer,
});

export default root;
