import {Posts} from './interface'

export const GET_POSTS = 'GET_POSTS';
// export const _Make_Post = 'Make_Post';
// export const _Make_Comment = '_Make_Comment';
// export const _Remove_Comment = '_Remove_Comment';
// export const _Remove_Post = '_Remove_Post';
// export const _Update_Post = '_Update_Post';


export interface GetPostsStateType {
    posts: Posts[];
}


interface GetPostsActionType {
    type: typeof GET_POSTS;
    payload: Posts[]
}


export type PostActionTypes = GetPostsActionType;




