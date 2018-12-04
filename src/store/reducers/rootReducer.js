import { combineReducers } from 'redux';
import current from './current';
import saved from './saved';

const rootReducer = combineReducers({
    current,
    saved
});

export default rootReducer
