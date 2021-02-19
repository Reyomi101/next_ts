import { combineReducers } from 'redux';
import {BlogReducer} from './Reducer';

export default combineReducers({
	posts: BlogReducer,
});