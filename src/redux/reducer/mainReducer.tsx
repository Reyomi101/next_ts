import * as types from "../interFaces/types";

const initialProps = {
  posts: [],
  newPosts: [],
  comments: [],
  editPost: [],
};

export const PostReducer = (state = initialProps, action) => {
  let copyState = Object.assign({}, state);
  switch (action.type) {
    case types.GET_POSTS:
      // alert(JSON.stringify(action.payload));
      return {
        ...state,
        posts: action.payload,
      };

    // case types.GET_COMMENTS:
    //   return {
    //     ...state,
    //     comments: action.payload,
    //   };

    case types.ADD_POSTS:
      let tempList = copyState.newPosts;
      tempList.push(action.payload);
      copyState.newPosts = tempList;

      // alert("here at mainReducer");
      // console.log(action.payload);
      return copyState;

    case types.UPDATE_POSTS:
			copyState.editPost = action.payload;
			return copyState;

    case types.REMOVE_POSTS:
			let tempData = copyState.newPosts;
			var index = tempData.indexOf[action.payload];
			delete tempData[index];
			copyState.newPosts = tempData;
			// alert(JSON.stringify(copyState.posts));
      console.log(action.payload);
      console.log(index);
      console.log(copyState.newPosts);
			return copyState;

    default:
      return state;
  }
};

// const initialState: types.NewState = {
//   postsItems: [],
// };

// export function NewPostReducer(
//   state = initialState,
//   action: types.PostsActionTypes
// ): types.NewState {
//   switch (action.type) {
//     case types.ADD_POSTS:
//       console.log(action.payload);
//       return {
//         postsItems: [...state.postsItems, action.payload],
//       };

//     default:
//       return state;
//   }
// }

// const reducers = {
//   posts: PostReducer,
//   newPosts: NewPostReducer,
// }

// export default combineReducers(reducers)

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
