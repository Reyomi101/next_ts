import {createStore, applyMiddleware} from 'redux';
import { createWrapper } from 'next-redux-wrapper'
import  rootReducer  from './reducer/rootReducer';
import thunkMiddleware from 'redux-thunk'

const bindMiddleware = (middleware) => {
	if(process.env.NODE_ENV !==  'development') {
		const {composeWithDevTools} = require('redux-devtools-extension')
		return composeWithDevTools(applyMiddleware(...middleware))
	}
	return applyMiddleware(...middleware)
}


const initStore = () => {
	return createStore(rootReducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)


// const store = createStore(
// 	rootReducer,
// 	composeWithDevTools(applyMiddleware(thunkMiddleware))
// );

// export type AppState = 	ReturnType<typeof rootReducer>;
// export default store;


