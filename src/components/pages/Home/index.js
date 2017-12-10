import React, { Component } from 'react';

import connect from './connector';
import './styles.css';

class Home extends Component {
  render() {
    return (
      <div id="page-home">
        {this.props.weather.weatherForCity}
        <button type="button" onClick={() => this.props.fetchWeatherForCity({city: 'Köln'})}>Test</button>
      </div>
    );
  }
}

export default connect(Home);