// import * as t from '../types';

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

import * as types from '../types';

const INITIAL_STATE = {
	PostsItems: {},
	isFetchedOnServer: false,
	error: null,
};

function reducer(state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case types.FETCH_POSTS_SUCCESS:
			alert(JSON.stringify(payload.isServer));
			return {
				...state,
				PostItems: payload.response,
				isFetchedOnServer: payload.isServer,
			};

		case type.FETCH_POSTS_FAILURE:
			return {
				...state,
				error: payload.error,
				isFetchedOnServer: payload.isSever,
			};

		default:
			return state;
	}
}

export default reducer;
