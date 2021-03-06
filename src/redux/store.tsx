// import { createStore } from 'redux';
// import rootReducer from './reducer/rootReducer';

// const store = createStore(rootReducer);
// export default store;

import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './reducer/mainEpics';
import reducer from './reducer/mainReducer';
import * as types from './types';

let store;

const initStore = (initialState) => {
	const epicMiddleware = createEpicMiddleware();
	const logger = createLogger({ collapsed: true });
	const reduxMiddleware = applyMiddleware(epicMiddleware, logger);

	const store = createStore(reducer, initialState, reduxMiddleware);
	epicMiddleware.run(rootEpic);

	return store;
};

export const initializeStore = (preloadedState) => {
	let _store = store ?? initStore(preloadedState);

	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		});
		store = undefined;
	}

	if (typeof window === 'undefined') return _store;

	if (!store) store = _store;

	return _store;
};

export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
}
