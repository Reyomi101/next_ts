import { Dispatch } from "redux";
import { dispatch } from 'rxjs/internal/observable/pairs'
import * as types from '../interFaces/types'
import  store  from '../store';


// export const addComments = (params) => {
//     console.log(params);
//     return {
//         type: types.ADD_COMMENT,
//         payload: params
//     }
// }

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
