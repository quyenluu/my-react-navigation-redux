import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from '../reducers/AppReducer';

export const AppStore = createStore(AppReducer, applyMiddleware(thunk));