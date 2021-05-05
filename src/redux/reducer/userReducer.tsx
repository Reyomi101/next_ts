import * as types from '../interFaces/types';

const initialProps = {
	users: [],
	userId: [],
	defaultUser: [
		{
			id: 11,
			name: 'James Bond',
			username: '007',
			email: 'admin@eon.co.uk',
			address: {
				street: '**** *** ***',
				suite: '** **** ****',
				city: '*****',
				zipcode: '** ** ***',
				geo: {
					lat: '***.***',
					lng: '**.****'
				}
			},
			phone: '078*5 000 007',
			website: 'www.007.com',
			company: {
				name: 'MI6',
				catchPhrase: "NOW THERE'S A NAME TO DIE FOR",
				bs: 'My Name is Bond, James Bond'
			}
		}
	]
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

		case types.SET_DEFAULT_USER:
			let temUser = copyState.defaultUser;
			temUser.concat(action.payload);
			copyState.defaultUser = temUser;
			console.log(action.payload);
			return copyState;
		// const tempUserData = {
		//   id: action.payload.id,
		//   name: action.payload.name,
		//   username: action.payload.username,
		//   email: action.payload.email,
		//   address: {
		//     street: action.payload.address.street,
		//     suite: action.payload.address.suite,
		//     city: action.payload.address.city,
		//     zipcode: action.payload.address.zipcode,
		//     geo: {
		//       lat: action.payload.address.lat,
		//       lng: action.payload.address.lng,
		//     }
		//   },
		//   phone: action.payload.phone,
		//   website: action.payload.website,
		//   company: {
		//     name: action.payload.company.name,
		//     catchPhrase: action.payload.company.catchPhrase,
		//     bs: action.payload.company.bs,
		//   }
		// }

		// return {
		//   ...state,
		//   //@ts-ignore
		//   defaultUser: state.users.concat(tempUserData)
		// }

		default:
			return state;
	}
};
