import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import PropTypes from 'proptypes';

class WeatherTable extends Component {
  render() {
    return (
      <Panel header={this.props.cityName}>
        <Table responsive bordered striped hover>
          <thead>
          <tr>
            <th>Temperature</th>
            <th>Conditions</th>
            <th>Humidity</th>
            <th>Pressure</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{this.props.temp}</td>
            <td>{this.props.descriptions.join(', ')}</td>
            <td>{this.props.humidity}</td>
            <td>{this.props.pressure}</td>
          </tr>
          </tbody>
        </Table>
      </Panel>
    );
  }
}

WeatherTable.propTypes = {
  temp: PropTypes.number,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  cityName: PropTypes.string,
};

WeatherTable.defaultProps = {
  temp: null,
  descriptions: [],
  humidity: null,
  pressure: null,
  cityName: null,
};

export default WeatherTable;
