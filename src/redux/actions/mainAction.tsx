import * as types from '../types';

export const startFetchingPosts = () => ({
	type: types.START_FETCH_POSTS,
});

export const fetchPosts = (isServer = false) => ({
	type: types.FETCH_POSTS,
	payload: { isServer },
});

export const fetchPostsSuccess = (response, isServer) => ({
	type: types.FETCH_POSTS_SUCCESS,
	payload: { response, isServer },
});

export const fetchPostsFailure = (error, isServer) => ({
	type: types.FETCH_POSTS_FAILURE,
	payload: { error, isServer },
});

// export const Create_comment = (params) => {
// 	store.dispatch({
// 		type: t._Make_Comment,
// 		payload: params,
// 	});
// };

// export const Remove_Comment = (params) => {
// 	store.dispatch({
// 		type: t._Remove_Comment,
// 		payload: params,
// 	});
// };

// export const Create_post = (params) => {
// 	store.dispatch({
// 		type: t._Make_Post,
// 		payload: params,
// 	});
// };

// export const Update_post = (params) => {
// 	// alert(JSON.stringify(params));
// 	store.dispatch({
// 		type: t._Update_Post,
// 		payload: params,
// 	});
// };

// export const Remove_Post = (params) => {
// 	store.dispatch({
// 		type: t._Remove_Post,
// 		payload: params,
// 	});
// };

// export const Show_posts = () => {
// 	WebClient.get('/posts').then((res) => {
// 		// alert(JSON.stringify(res.data));
// 		// console.log('here at action!');
// 		store.dispatch({
// 			type: t._Show_Post,
// 			payload: res.data,
// 		});
// 		// return Promise.resolve(200);
// 	});
// };
