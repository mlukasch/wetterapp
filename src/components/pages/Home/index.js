import React, { Component } from 'react';
import { FormGroup, FormControl, Grid, Col, Row } from 'react-bootstrap';
import PropTypes from 'proptypes';

import connect from './connector';
import './styles.css';
import { WeatherInterface, WeatherDefault } from '../../../constants/interfaces';
import WeatherTable from './components/WeatherTable';

class Home extends Component {
  render() {
    const weatherData = this.props.weather.weatherData;

    return (
      <div>
        <form id="page-home">
          <FormGroup>
            <FormControl
              type="text"
              value={this.props.city}
              placeholder="Your city"
              onChange={e => this.props.actions.onChangeCity({city: e.target.value})}
            />
          </FormGroup>
        </form>
        <Grid>
          <Row>
            <Col>
              {weatherData ? (<WeatherTable
                temp={weatherData.main.temp}
                humidity={weatherData.main.humidity}
                pressure={weatherData.main.pressure}
                descriptions={weatherData.weather.map(data => data.main)}
                cityName={weatherData.name}
              />) : null
              }

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    weatherData: WeatherInterface,
    cityValid: PropTypes.bool,
  }).isRequired,
  actions: PropTypes.shape({
    onChangeCity: PropTypes.func,
  }).isRequired,
};

export default connect(Home);
