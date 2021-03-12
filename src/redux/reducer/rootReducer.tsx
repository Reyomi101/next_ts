import {combineReducers} from 'redux';
import {PostReducer,NewPostReducer} from './mainReducer'

const rootReducer = combineReducers({
    posts: PostReducer,
    newPosts: NewPostReducer,
});

export default rootReducer;