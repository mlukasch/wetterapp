import Immutable from 'seamless-immutable';

import api from '../actionTypes/api';

const INITIAL_STATE = Immutable.from({
  weatherForCity: null,
});

const weather = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case api.FETCH_WEATHER_FOR_CITY_SUCCESS:
      return state.set('weatherForCity', action.payload);
    default:
      return state;
  }
};

export default weather;
