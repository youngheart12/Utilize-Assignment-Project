import {combineReducers} from 'redux';
import authReducer from './authReducer';
import Collection from './collectionReducer';

export default combineReducers({
    auth:authReducer,
    collection:Collection
});