import { combineReducers } from 'redux';
import nav from './NavReducer';
import auth from './AuthReducer';

const AppReducer = combineReducers({
    nav, 
    auth
});

export default AppReducer;