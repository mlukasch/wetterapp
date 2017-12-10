import React, { Component } from 'react';

import connect from './connector';

const Test = (props) => (<div>
  {props.weather.weatherForCity}
  <button type="button" onClick={() => props.fetchWeatherForCity({city: 'Köln'})}>Test</button>
</div>);

export default connect(Test);
