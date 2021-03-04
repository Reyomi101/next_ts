import * as t from '../types';
import { WebClient } from '../../api/webclient';
import store from '../store';

export const Create_comment = (params) => {
	store.dispatch({
		type: t._Make_Comment,
		payload: params,
	});
};

export const Remove_Comment = (params) => {
	store.dispatch({
		type: t._Remove_Comment,
		payload: params,
	});
};

export const Create_post = (params) => {
	store.dispatch({
		type: t._Make_Post,
		payload: params,
	});
};

export const Update_post = (params) => {
	// alert(JSON.stringify(params));
	store.dispatch({
		type: t._Update_Post,
		payload: params,
	});
};

export const Remove_Post = (params) => {
	store.dispatch({
		type: t._Remove_Post,
		payload: params,
	});
};

export const Show_posts = () => {
	WebClient.get('/posts').then((res) => {
		// alert(JSON.stringify(res.data));
		// console.log('here at action!');
		store.dispatch({
			type: t._Show_Post,
			payload: res.data,
		});
		return Promise.resolve(200);
	});
};
