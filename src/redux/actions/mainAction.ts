import * as types from '../interFaces/types';
import  {Posts} from '../interFaces/interface';
import { Dispatch } from 'redux';
import { WebClient } from '../../api/webclient';

// interface Posts {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// }



//For POSTS START here!
export const getPostAction = (posts: Posts[]) =>  {
  return ({
    type: types.GET_POSTS,
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

export const addPostAction = (params) => {
  // alert(JSON.stringify(params))
  return ({
    type: types.ADD_POSTS,
    payload: params
  })
  
}


export const addPosts = (params) =>  {
    alert(JSON.stringify(addPostAction(params)))
  return function (dispatch: Dispatch) {
    dispatch(addPostAction(params))
    return params
  }
}


export const addNewPosts = (params) => (dispatch: Dispatch) => {
  alert(JSON.stringify(params))
  dispatch({
    type: types.ADD_POSTS,
    payload: params
  })
}

//For  POSTS END here!

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
