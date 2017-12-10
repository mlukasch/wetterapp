import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import AppRouter from './AppRouter';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default Root;
