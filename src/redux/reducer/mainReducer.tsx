import * as t from "../types";

const initialState = { items: [] };

const mainReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case t._Make_Post:
      return { ...state,
         items: action.payload 
        };
    default:
      return { ...state };
  }
};


export default mainReducer;