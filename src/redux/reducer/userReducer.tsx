import * as types from '../interFaces/types';

const initialProps = {
	users: [],
	userId: [],
};

export const UserReducer = (state = initialProps, action) => {
	let copyState = Object.assign({}, state);
	switch (action.type) {
		case types.GET_USERS:
			return {
				...state,
				users: action.payload
			};

		case types.GET_UserID:
			// console.log(action.payload);
			return {
				...state,
				userId: action.payload
			};

		default:
			return state;
	}
};
