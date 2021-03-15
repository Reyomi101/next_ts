import * as types from '../interFaces/types'

const initialState = {
    comment: [],
}

const CommReducer = (state = initialState, action) => {
let copyState = Object.assign({}, state);
// let copyState ;
    switch(action.type) {
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

                                                                                                                                                                                          
        default:
            // return {...state};
            return state;
    }
}


export default CommReducer;