import Immutable from 'seamless-immutable';

import api from '../actionTypes/weather';

const INITIAL_STATE = Immutable.from({
  city: null,
  weatherData: null,
  cityValid: false,
});

const weather = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case api.FETCH_WEATHER_FOR_CITY_SUCCESS:
      return state.set('weatherData', action.payload);
    default:
      return state;
  }
};

export default weather;
