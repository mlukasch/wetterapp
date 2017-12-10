import urlParser from 'url-parse';
import axios from 'axios';

import { API_KEY } from '../secrets';
import { BASE_URL } from '../config/openweathermap';

export const queryWeatherForCity = ({ city }) => {
  const url = urlParser(BASE_URL);
  url.query = { q: city, APPID: API_KEY };
  return axios.get(url.toString());
};
