import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from '../reducers/AppReducer';
import { middleware } from '../../utils/redux';

export const AppStore = createStore(AppReducer, applyMiddleware(thunk, middleware));