import Immutable from 'seamless-immutable';

import actionTypes from '../actionTypes/test';

const INITIAL_STATE = Immutable.from({
  data: 'Hi Du',
});

const test = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return state.set('data', 'Hast gedrückt');
    default:
      return state;
  }
};

export default test;
