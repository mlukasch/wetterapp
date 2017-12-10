import { combineReducers } from 'redux';

import weather from './weather';


const root = combineReducers({
  weather,
});

export default root;
