import PropTypes from 'proptypes';

export const WeatherInterface = PropTypes.shape({
  weatherData: PropTypes.shape({
    main: PropTypes.shape({
      humidity: PropTypes.number,
      pressure: PropTypes.number,
      temp: PropTypes.number,
    }),
    weather: PropTypes.arrayOf(PropTypes.shape({
      main: PropTypes.string,
    })),
    name: PropTypes.string,
  }),
});
