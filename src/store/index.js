import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const logger = createLogger({ diff: true });

const middlewares = [logger];

const storeEnhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, storeEnhancer);

export default store;
