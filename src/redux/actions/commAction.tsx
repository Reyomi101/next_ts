import { type } from "node:os";
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


export const getComment = () => {
  return function (dispatch: Dispatch) {
    WebClient.get('/comments').then((res) => {
      // alert(JSON.stringify(res.data))
      dispatch(getCommentAction(res.data));
      return res.data;
    })
  }
}


export const addComments = (params) => {
    // console.log(params);
    store.dispatch({
      type: types.ADD_COMMENT,
      payload: params,
    })
  }


  export const Remove_Comment = (params) => {
    // console.log(params);
	store.dispatch({
		type: types.REMOVE_COMMENT,
		payload: params,
	});
};

export const Remove_Comment_s = (params) => {
  // console.log('test remove',params);
store.dispatch({
  type: types._REMOVE_COMMENT_s,
  payload: params,
});
};


export const Get_Comment_info = (params) => {
  // alert(JSON.stringify(params));
  console.log('here at action geting info ',params);
store.dispatch({
  type: types.GET_COMMENT_ID,
  payload: params,
});
};




export const Update_Comment = (params) => {
  // console.log('update comment data',params);
  store.dispatch({
    type: types.UPDATE_COMMENT,
    payload: params,
  })
}
