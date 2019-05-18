import { combineReducers } from 'redux';
import feeder from './feeder'
import changeEnv from './changeEnv'

export default combineReducers({
    feeder,
    changeEnv
});
