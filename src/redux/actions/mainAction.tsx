import * as types from "../interFaces/types";
// import  {Posts, newPosts} from '../interFaces/interface';
import { Dispatch } from "redux";
import { WebClient } from "../../api/webclient";
import { dispatch } from "rxjs/internal/observable/pairs";
import store from '../store'

// interface newPosts {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// }

//For POSTS START here!
export const getPostAction = (posts) => {
  return {
    type: types.GET_POSTS,
    payload: posts,
  };
};

export const getPosts = () => {
  return function (dispatch: Dispatch) {
    WebClient.get("/posts").then((res) => {
      dispatch(getPostAction(res.data));
      return res.data;
    });
  };
};

//for add newPosts here!

export const addPosts = (params) => {
  store.dispatch({
    type: types.ADD_POSTS,
    payload: params,
  })
}

// export const addPosts = (newPosts) =>  {
//     // alert(JSON.stringify(addPostAction(params)))
//     // console.log(newPosts);
//   return function (dispatch: Dispatch) {
//     addPostAction(newPosts).then((res)=>{
//       dispatch(res.data)
//       return newPosts
//     )}
//     // console.log();

//   }
// }

// export const addPosts = (params) => (dispatch) => {
//   return dispatch({
//     type: types.ADD_POSTS,
//     payload: params
//   })
// }

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
