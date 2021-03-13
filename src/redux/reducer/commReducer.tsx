import * as types from '../interFaces/commTypes'

const initialState = {
    comment: [],
}

const CommReducer = (state = initialState, action) => {
let copyState = Object.assign({}, state);
// let copyState ;
    switch(action.type) {
        case types.ADD_COMMENTS:
        let tempComm = copyState.comment;
        tempComm.push(action.payload);
        copyState.comment = tempComm;
        alert(JSON.stringify(action.payload))
        return copyState;

        // copyState = {...state};
        // copyState.comment = copyState.comment + action.payload;
        // console.log(action.payload);
        // return copyState


        default:
            // return {...state};
            return state;
    }
}


export default CommReducer;