import * as t from '../types';

const initialState = {
	comments: [],
	newposts: [],
	postItems: [],
	//   {
	//   commentId: '1',
	//   commentBody: 'Hello this is my first comment!'
	// }]
};
2;

const mainReducer = (state = initialState, action) => {
	let copyState = Object.assign({}, state);
	switch (action.type) {
		case t._Show_Post:
			// alert(JSON.stringify(action.payload));
			// let thisPost = copyState.newposts;
			// thisPost.push(action.payload);
			// copyState.newposts = thisPost;
			// copyState.postItems = action.payload;
			copyState.newposts = action.payload;
			return copyState;

		case t._Make_Post:
			//  alert(action.payload);
			let tempPost = copyState.newposts;
			tempPost.push(action.payload);
			copyState.newposts = tempPost;
			return copyState;

		case t._Make_Comment:
			let tempItems = copyState.comments;
			tempItems.push(action.payload);
			copyState.comments = tempItems;
			return copyState;

		case t._Remove_Comment:
			//  alert(JSON.stringify(action.payload));
			let tempList = copyState.comments;
			var index = tempList.indexOf(action.payload);
			delete tempList[index];
			// tempList.splice(0,1,action.payload);
			copyState.comments = tempList;
			// alert(JSON.stringify(copyState.comments));
			return copyState;

		case t._Remove_Post:
			//  alert(JSON.stringify(action.payload));
			let tempData = copyState.newposts;
			var index = tempData.indexOf(action.payload);
			delete tempData[index];
			// tempData.splice(0,1,index);
			copyState.newposts = tempData;
			// alert(JSON.stringify(copyState.comments));
			return copyState;

		case t._Update_Post:
			let tempDetails = copyState.newposts;
			var index = tempDetails.indexOf(action.payload);
			// tempDetails.splice(1, 0, index);
			// update tempDetails[index];
			tempDetails.push(index);
			copyState.newposts = tempDetails;
			// alert(JSON.stringify(newposts));
			return copyState;

		default:
			return { ...state };
	}
};

export default mainReducer;
