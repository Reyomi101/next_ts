import {  GET_POSTS } from '../interFaces/types';
import { Posts } from '../interFaces/interface';
import { Dispatch } from 'redux';
import { WebClient } from '../../api/webclient';

//For get post START here!
export const getPostAction = (posts: Posts[]) =>  {
  return ({
    type: GET_POSTS,
    payload: posts,
  });
};


export const getPosts = () => {
  return function (dispatch: Dispatch) {
    WebClient.get('/posts').then((res) => {
      dispatch(getPostAction(res.data));
      return res.data;
    });
  };
};


//For get post END here!

//For get comments START here!
// export const getCommentAction = (comments: Posts[]): PostActionTypes => {
//   return {
//     type: GET_COMMENTS,
//     payload: comments,
//   };
// };

// export const getComments = () => {
//   return function (dispatch: Dispatch<PostActionTypes>) {
//     WebClient.get('/comments').then((res) => {
//       dispatch(getCommentAction(res.data));
//       return res.data;
//     });
//   };
// };

// // export const Create_comment = (params) => {
// // 	store.dispatch({
// // 		type: t._Make_Comment,
// // 		payload: params,
// // 	});
// // };

// // export const Remove_Comment = (params) => {
// // 	store.dispatch({
// // 		type: t._Remove_Comment,
// // 		payload: params,
// // 	});
// // };

// // export const Create_post = (params) => {
// // 	store.dispatch({
// // 		type: t._Make_Post,
// // 		payload: params,
// // 	});
// // };

// // export const Update_post = (params) => {
// // 	// alert(JSON.stringify(params));
// // 	store.dispatch({
// // 		type: t._Update_Post,
// // 		payload: params,
// // 	});
// // };

// // export const Remove_Post = (params) => {
// // 	store.dispatch({
// // 		type: t._Remove_Post,
// // 		payload: params,
// // 	});
// // };

// // export const Show_posts = () => {
// // 	WebClient.get('/posts').then((res) => {
// // 		// alert(JSON.stringify(res.data));
// // 		// console.log('here at action!');
// // 		store.dispatch({
// // 			type: t._Show_Post,
// // 			payload: res.data,
// // 		});
// // 		// return Promise.resolve(200);
// // 	});
// // };
