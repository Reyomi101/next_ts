import {combineReducers} from 'redux';
import {getPostsReducer} from './mainReducer'

const rootReducer = combineReducers({
    posts: getPostsReducer
});

export default rootReducer;