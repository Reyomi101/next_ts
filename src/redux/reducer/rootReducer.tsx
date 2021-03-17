import {combineReducers} from 'redux';
import {PostReducer} from './mainReducer'
import  CommReducer  from './commReducer'
import  {UserReducer}  from './userReducer'

const rootReducer = combineReducers({
    comments: CommReducer,
    posts: PostReducer,
    users: UserReducer,
});

export default rootReducer;