import actionTypes from '../actionTypes/api';
import * as weatherApi from '../api/weather';

export const fetchWeatherForCity = ({ city }) => (dispatch, getState) => {
  console.log('fetchWeatherForCity');
  weatherApi.queryWeatherForCity({ city })
    .then((response) => {
      dispatch({
        type: actionTypes.FETCH_WEATHER_FOR_CITY_SUCCESS,
        payload: response.data,
      });
    }).catch(e => dispatch({
      type: actionTypes.FETCH_WEATHER_FOR_CITY_FAILED,
      errorMessage: e,
    }));
};
