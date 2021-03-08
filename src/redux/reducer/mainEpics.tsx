
// import { from, of } from 'rxjs'
// import { filter, switchMap, map, catchError, mergeMap } from 'rxjs/operators'
// import { combineEpics, ofType } from 'redux-observable';
// import axios from 'axios'
// import * as types from '../types';
// import * as actions from '../actions/mainAction';

// export const loadEpic = (action$) => action$.pipe(
// 	ofType(actions.load),
// 	mergeMap((action: any) => from(axios.get(`http://jsonplaceholder.typicode.com/posts${action.payload.id}`))
// 	.pipe(
// 		map(data => actions.loadSuccess(data)),
// 		catchError(e => of(actions.loadFailure()))
// 	)
// 	)
// )


// const selectUserPost = state => state.userId
// const getUserPostTitle = state => selectUserPost(state).title


// // import { interval, of } from 'rxjs';
// // import { takeUntil, mergeMap, catchError, map } from 'rxjs/operators';
// // import { combineEpics, ofType } from 'redux-observable';
// // import { request } from 'universal-rxjs-ajax';
// // import axios from 'axios';

// // import * as types from '../types';
// // import * as actions from '../actions/mainAction';

// // export const fetchPostsEpics = (action$, state$) =>
// // 	action$.pipe(
// // 		ofType(types.START_FETCH_POSTS),
// // 		mergeMap((action) => {
// // 			return interval(1000).pipe(
// // 				map((x) => actions.fetchPosts()),
// // 				takeUntil(action$.ofType(types.FETCH_POSTS_FAILURE))
// // 			);
// // 		})
// // 	);

// // // const thisPayload = actions.payload.isServer;

// // export const fetchPostEpicts = (action$, state$) =>
// // 	action$.pipe(
// // 		ofType(types.FETCH_POSTS),
// // 		mergeMap((action) =>
// // 			request({
// // 				url: `http://jsonplaceholder.typicode.com/posts${state$.value}`,
// // 			}).pipe(
// // 				map((response) => {
// // 					actions.fetchPostsSuccess(response.response, action);
// // 				}),
// // 				catchError((error: any) =>
// // 					of(actions.fetchPostsFailure(error.xhr.response, action))
// // 				)
// // 			)
// // 		)
// // 	);

// // export const rootEpic = combineEpics(fetchPostsEpics, fetchPostEpicts);
