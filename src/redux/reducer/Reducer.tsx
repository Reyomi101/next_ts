import { type } from 'os';
import {_ACTION} from '../actions/ActionType'

const initialState = {items:[]};

export const BlogReducer=(state = initialState, action) => {
    switch(action.type) {
        case _ACTION._CREATE: 
            return {
                ...state,
                items: action.payload,
            };


        default: return state;
    }

}