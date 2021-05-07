import { type } from "node:os";
import * as types from "../interFaces/types";

const initialState = {
  comments: [],
  comment: [],
};

const CommReducer = (state = initialState, action) => {
  let copyState = Object.assign({}, state);
  // let copyState ;
  switch (action.type) {
    case types.GET_COMMENTS:
    //   alert(JSON.stringify(action.payload));
      return {
        ...state,
        comments: action.payload,
      };

    case types.ADD_COMMENT:
      let tempComm = copyState.comment;
      tempComm.push(action.payload);
      copyState.comment = tempComm;

      // alert('here at commReducer')
      // console.log(action.payload);

      return copyState;

    // copyState = {...state};
    // copyState.comment = copyState.comment + action.payload;
    // console.log(action.payload);
    // return copyState

		case types.REMOVE_COMMENT:
			let tempList = copyState.comment;
			var index = tempList.indexOf(action.payload);
			delete tempList[index];
			copyState.comment = tempList;
			alert(JSON.stringify(copyState.comment));
      console.log('here at commReducer');
			return copyState;

    case types._REMOVE_COMMENT_s:
      let tempList2 = copyState.comments;
      var index2 = tempList2.indexOf(action.payload);
      delete tempList2[index2];
      copyState.comments = tempList2;
      alert(JSON.stringify(copyState.comments));
      console.log('here at commReducer s');
      return copyState;


    default:
      // return {...state};
      return state;
  }
};

export default CommReducer;
