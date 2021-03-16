import { Dispatch } from "redux";
import { dispatch } from 'rxjs/internal/observable/pairs'
import { WebClient } from "../../api/webclient";
import * as types from '../interFaces/types'
import  store  from '../store';

export const getCommentAction = (comments) => {
  // console.log(comments);
  return {
    type: types.GET_COMMENTS,
    payload: comments,
  }
}

// export const getComment = () => {
//   return function (dispatch: Dispatch) {
//     const POST_URL = 'https://jsonplaceholder.typicode.com/comments';
//     fetch(POST_URL, {
//       method: 'GET'
//     })
//     .then(res => res.json()
//     .then(data => {
//       alert(JSON.stringify(data))
//       dispatch(getCommentAction(data));
//       return data;
//     }))
//   }
// }


export const getComment = () => {
  return function (dispatch: Dispatch) {
    WebClient.get('/comments').then((res) => {
      // alert(JSON.stringify(res.data))
      dispatch(getCommentAction(res.data));
      return res.data;
    })
  }
}

// export const getComment = () => {
//   return function (dispatch: Dispatch) {
//     WebClient.get("/posts").then((res) => {
//       alert(JSON.stringify(res.data))
//       dispatch(getCommentAction(res.data));
//       return res.data;
//     });
//   };
// };


export const addComments = (params) => {
    console.log(params);
    store.dispatch({
      type: types.ADD_COMMENT,
      payload: params,
    })
  }

// export const AddCommentAsync = (newdata) => {
//     console.log(addComments(newdata))
//    return (dispatch) => {
    
//        setTimeout(()=> {
//            dispatch(addComments(newdata))
//        }, 1000)
//    };
// } 


// export function addComments(params) {
//     console.log(params)
//    store.dispatch({
//        type: types.ADD_COMMENTS,
//        payload: params,
//    })
// }



// setInterval(()=>{
//     // console.log(params);
//     // dispatch({
//     //     type: types.ADD_COMMENTS,
//     //     payload: params //?
//     // })
// },1000)
   

// console.log(params);
