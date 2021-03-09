import {Posts, Comments} from './interface'

export const GET_POSTS = 'GET_POSTS';
export const GET_COMMENTS = 'GET_COMMENTS';
// export const _Make_Post = 'Make_Post';
// export const _Make_Comment = '_Make_Comment';
// export const _Remove_Comment = '_Remove_Comment';
// export const _Remove_Post = '_Remove_Post';
// export const _Update_Post = '_Update_Post';

//for Get Posts START here!
export interface GetPostsStateType {
    posts: Posts[] 
}

interface GetPostsActionType {
    type: typeof GET_POSTS | typeof GET_COMMENTS
    payload: Posts[] 
}

export type PostActionTypes = GetPostsActionType;
//for Posts END here!


// //for Get Comments START here!
// export interface GetCommentStateType {
//     comments: Comments[];
// }

// interface GetCommentActionType {
//     type: typeof GET_COMMENTS;
//     payload: Comments[]
// }

// export type CommentActionTypes = GetCommentActionType;
// //for Comments END here!


