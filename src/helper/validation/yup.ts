import * as yup from 'yup';

export const BlogAdd = yup.object().shape({
	title: yup.string().required('This field is Required!'),
	body: yup.string().required('This field is Required!'),
});

// export const ForBlogComments = yup.object().shape({
// 	// commentId: yup.string().required(),
// 	commentBody: yup.string().required('This field is Required!'),
// 	postId: yup.string().required('This field is Required!'),
// 	commentId: yup.string().required('This field is Required!'),
// 	userName: yup.string().required('This field is Required!'),
// 	userEmail: yup.string().required('This field is Required!'),
// });


export const ForBlogComments = yup.object().shape({
	// commentId: yup.string().required(),
	commentBody: yup.string().required('This field is Required!'),
});

export const BlogEdit = yup.object().shape({
	subject: yup.string().required(),
	content: yup.string().required(),
});
