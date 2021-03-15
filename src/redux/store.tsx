import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer/rootReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== 'production') {
	  const { composeWithDevTools } = require('redux-devtools-extension')
	  return composeWithDevTools(applyMiddleware(...middleware))
	}
	return applyMiddleware(...middleware)
  }

// const store = () => {
// 	return createStore(rootReducer, bindMiddleware([thunkMiddleware]))
//   }

// export const wrapper = createWrapper(store)

const store = createStore(
  rootReducer,
//   composeWithDevTools(applyMiddleware(thunkMiddleware))
  bindMiddleware([thunkMiddleware])
//   composeWithDevTools(applyMiddleware(thunk))
);

export default store;
