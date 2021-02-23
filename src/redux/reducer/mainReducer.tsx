import * as t from "../types";

const initialState = { 
  comments: [],
  newposts: [],



//   {
//   commentId: '1',
//   commentBody: 'Hello this is my first comment!'
// }] 
};2

const mainReducer = (state =  initialState , action) => {
  let copyState = Object.assign({},state)
  switch (action.type) {
    
    case t._Show_Post:
        // alert(JSON.stringify(action.payload));
    copyState.newposts = action.payload;
    return copyState;

    case t._Make_Post:
            //  alert(action.payload);
      let tempPost = copyState.newposts;
      tempPost.push(action.payload)
      copyState.newposts = tempPost;
      return copyState;
      
    case t._Make_Comment:
      let tempItems = copyState.comments;
      tempItems.push(action.payload)
      copyState.comments = tempItems;
      return copyState;

    default:
      return { ...state };
  }
};


export default mainReducer;