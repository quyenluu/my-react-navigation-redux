import { combineReducers } from 'redux';
import nav from './NavReducer';

const AppReducer = combineReducers({
    nav
});

export default AppReducer;