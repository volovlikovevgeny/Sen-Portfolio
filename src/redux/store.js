import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleiddlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleiddlewares));

export default store;