import { connect } from 'react-redux';

import * as api from '../../../actions/api';

import selectWeather from '../../../selectors/weather';

const mapStateToProps = state => ({
  weather: selectWeather(state),
});

const mapDispatchToProps = ({
  fetchWeatherForCity: api.fetchWeatherForCity,
});

export default connect(mapStateToProps, mapDispatchToProps);
