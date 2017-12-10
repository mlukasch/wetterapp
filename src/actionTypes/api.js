import keymirror from 'keymirror';

const weather = {
  FETCH_WEATHER_FOR_CITY: null,
  FETCH_WEATHER_FOR_CITY_SUCCESS: null,
  FETCH_WEATHER_FOR_CITY_FAILED: null,
};

export default keymirror({ ...weather });
