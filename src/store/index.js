import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

// middlewares:
const logger = createLogger({ diff: true });
const middlewares = [thunk, logger];

const storeEnhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, storeEnhancer);

export default store;
