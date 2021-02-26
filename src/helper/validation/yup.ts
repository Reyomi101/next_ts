import * as yup from 'yup';

export const BlogAdd = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().required(),
})


export const BlogComment = yup.object().shape({
    // commentId: yup.string().required(),
    commentBody: yup.string().required('This field is Required!'),
})

export const BlogEdit = yup.object().shape({
    subject: yup.string().required(),
    content: yup.string().required(),
})