import {combineReducers} from 'redux';
import {PostReducer} from './mainReducer'
import  CommReducer  from './commReducer'

const rootReducer = combineReducers({
    comments: CommReducer,
    posts: PostReducer,
});

export default rootReducer;