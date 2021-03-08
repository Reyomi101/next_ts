import {createStore, applyMiddleware} from 'redux';

import  rootReducer  from './reducer/rootReducer';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type AppState = 	ReturnType<typeof rootReducer>;
export default store;


