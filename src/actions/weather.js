import { showSnack, dismissSnack } from 'react-redux-snackbar';

import actionTypes from '../actionTypes/weather';
import * as weatherApi from '../api/weather';

export const onChangeCity = ({ city }) => (dispatch, getState) => {
  console.log('fetchWeatherForCity');
  dispatch({
    type: actionTypes.ON_CHANGE_CITY,
    city,
  });

  weatherApi.queryWeatherForCity({ city })
    .then((response) => {
      dispatch({
        type: actionTypes.FETCH_WEATHER_FOR_CITY_SUCCESS,
        payload: response.data,
      });

      dispatch(showSnack(city, {
        label: `Weather data for ${city} found`,
        timeout: 3000,
        button: { label: 'OK, GOT IT' },
      }));
    })
    .catch(e => console.log(e));
};
