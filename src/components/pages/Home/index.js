import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'proptypes';

import connect from './connector';
import './styles.css';
import { WeatherInterface } from '../../../constants/interfaces';

class Home extends Component {
  render() {
    return (
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
