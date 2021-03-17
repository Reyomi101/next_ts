import * as types from '../interFaces/types';
import { Dispatch } from 'redux';
import { WebClient } from '../../api/webclient';
import store from '../store';

export const getUserAction = (user) => {
  return {
    type: types.GET_USERS,
    payload: user,
  };
};

export const getUser = () => {
  return function (dispatch: Dispatch) {
    WebClient.get('/users').then((res) => {
      dispatch(getUserAction(res.data));
      return res.data;
    });
  };
};






// const userId = setDefaultUser.id;

export const getUserId = (userId) => {
    // console.log(userId);
    store.dispatch({
      type: types.GET_UserID,
      payload: userId
    })
}

export const setUser = () => (
  store.dispatch({
    type: types.SET_DEFAULT_USER,
   
  })
)
