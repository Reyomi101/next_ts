import * as yup from 'yup';

export const BlogAdd = yup.object().shape({
    subject: yup.string().required(),
    content: yup.string().required(),
})


export const BlogComment = yup.object().shape({
    comment: yup.string().required(),
})

export const BlogEdit = yup.object().shape({
    subject: yup.string().required(),
    content: yup.string().required(),
})