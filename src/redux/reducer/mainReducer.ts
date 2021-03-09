import {
  GET_POSTS,
  GetPostsStateType,
  PostActionTypes,
  GET_COMMENTS,
} from '../interFaces/types';

//for POSTS area START here!
const initialStateGetPosts: GetPostsStateType = {
  posts: [],
//   comments: [],
};

export const getPostsReducer = (
  state = initialStateGetPosts,
  action: PostActionTypes
): GetPostsStateType => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

	case GET_COMMENTS:
		return {
			...state,
		posts: action.payload
		}  

    default:
      return state;
  }
};
//for POSTS area END here!

//for COMMENTS area START here!
// const initialStateGetComments: GetCommentStateType = {
//   comments: [],
// };

// export const getCommentsReducer = (
//   state = initialStateGetComments,
//   action: CommentActionTypes
// ): GetCommentStateType => {
//   switch (action.type) {
//     case GET_COMMENTS:
//       return {
//         ...state,
//         comments: action.payload,
//       };

//     default:
//       return state;
//   }
// };
//for COMMENTS area END here!

// import * as types from '../interFaces/types';

// const initialState = {
// 	comments: [],
// 	newposts: [],
// 	postItems: [],
// 	editPost: [],
// 	//   {
// 	//   commentId: '1',
// 	//   commentBody: 'Hello this is my first comment!'
// 	// }]
// };

// const mainReducer = (state = initialState, action) => {
// 	let copyState = Object.assign({}, state);
// 	switch (action.type) {
// 		case t._Show_Post:
// 			copyState.postItems = action.payload;
// 			copyState.newposts = action.payload;
// 			alert(JSON.stringify(copyState.postItems));
// 			console.log('here at reducer!');
// 			return copyState;

// 		case t._Make_Post:
// 			//  alert(action.payload);
// 			let tempPost = copyState.newposts;
// 			tempPost.push(action.payload);
// 			copyState.newposts = tempPost;
// 			return copyState;

// 		case t._Make_Comment:
// 			let tempItems = copyState.comments;
// 			tempItems.push(action.payload);
// 			copyState.comments = tempItems;
// 			return copyState;

// 		case t._Remove_Comment:
// 			let tempList = copyState.comments;
// 			var index = tempList.indexOf(action.payload);
// 			delete tempList[index];
// 			copyState.comments = tempList;
// 			// alert(JSON.stringify(copyState.comments));
// 			return copyState;

// 		case t._Remove_Post:
// 			let tempData = copyState.newposts;
// 			var index = tempData.indexOf(action.payload);
// 			delete tempData[index];

// 			copyState.newposts = tempData;
// 			// alert(JSON.stringify(copyState.comments));
// 			return copyState;

// 		case t._Update_Post:
// 			copyState.editPost = action.payload;
// 			return copyState;

// 		default:
// 			return { ...state };
// 	}
// };

// export default mainReducer;
