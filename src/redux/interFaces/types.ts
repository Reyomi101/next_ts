export interface NewPosts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface NewState {
  postsItems: NewPosts[];
}

export const GET_POSTS = 'GET_POSTS';
export const ADD_POSTS = 'ADD_POSTS';
export const REMOVE_POSTS = 'REMOVE_POSTS';
export const UPDATE_POSTS = 'UPDATE_POSTS';


export const GET_COMMENTS = 'GET_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const _REMOVE_COMMENT_s = '_REMOVE_COMMENT_s';

export const GET_USERS = 'GET_USERS';
export const GET_UserID = 'GET_UserID';
export const SET_DEFAULT_USER = 'SET_DEFAULT_USER';
interface NewPostAction {
  type: typeof ADD_POSTS;
  payload: NewPosts;
}

//   interface RemovePostAction {
//     type: typeof REMOVE_POSTS
//     meta: {
//       timestamp: number
//     }
//   }

export type PostsActionTypes = NewPostAction;
//    |
//    RemovePostAction

// export const GET_COMMENTS = 'GET_COMMENTS';
// export const _Make_Post = 'Make_Post';
// export const _Make_Comment = '_Make_Comment';
// export const _Remove_Comment = '_Remove_Comment';
// export const _Remove_Post = '_Remove_Post';
// export const _Update_Post = '_Update_Post';
