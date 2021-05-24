import React from 'react';
import Layout from '../src/components/layout';
import useStyles from '../src/helper/headStyles';
import { useState, useEffect } from 'react';
import { BlogEdit } from '../src/helper/validation/yup';
import {
	TextField,
	Button,
	LinearProgress,
	Grid,
	Typography,
	Toolbar,
} from '@material-ui/core';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Update_post } from '../src/redux/actions/mainAction';
import { useHistory } from 'react-router-dom';

const ForUpdate = createSelector(
	(state: any) => state.posts,
	(editPost) => editPost
);

export default function EditBlog(props) {
	const classes = useStyles();
	const [progress, setProgress] = useState(0);
	const [buffer, setBuffer] = useState(10);
	const router = useRouter();
	const { title, body, userId, id } = router.query;
	const forUpdatePost = useSelector(ForUpdate);
	const progressRef = React.useRef(() => {});

	React.useEffect(() => {
		progressRef.current = () => {
			if (progress > 100) {
				setProgress(0);
				setBuffer(10);
			} else {
				const diff = Math.random() * 10;
				const diff2 = Math.random() * 10;
				setProgress(progress + diff);
				setBuffer(progress + diff + diff2);
			}
		};
	});

	React.useEffect(() => {
		const timer = setInterval(() => {
			progressRef.current();
		}, 50);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			<Layout title='Edit BLOG Post' fixed={true}>
			<Toolbar />
				<Typography variant='h3'>This is EDIT Blog</Typography>
				<Toolbar />
				<Typography variant='body1'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
					culpa? A odit dolorem illo delectus fuga labore fugiat culpa libero et
					recusandae officia accusantium laborum numquam sit necessitatibus
					fugit, temporibus incidunt veniam modi exercitationem? Quia inventore
					earum aliquam dolorem veniam dicta, minima excepturi officia
					repudiandae culpa ea explicabo dolores sunt.
				</Typography>

				<div className={classes.addform}>
					<Formik
						initialValues={{ title: title, body: body }}
						validationSchema={BlogEdit}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								Update_post({
									title: values.title,
									body: values.body,
									id: id,
									userId: userId,
								});

								Router.push({
									pathname: '/blogpage',
									query: {
										title: values.title,
										body: values.body,
										id: id,
										userId: userId,
									},
								});
								setSubmitting(false);
							}, 50);
						}}>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
						}) => (
							<form onSubmit={handleSubmit}>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										<TextField
											id='title'
											name='title'
											label='Subject Tilte'
											fullWidth
											margin='normal'
											value={values.title}
											onChange={handleChange}
											onBlur={handleBlur}
											variant='outlined'
											error={touched.title && Boolean(errors.title)}
											helperText={Boolean(errors.title) && touched.title}
										/>
										<Typography color='error'>
											{errors.title && touched.title && errors.title}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id='body'
											name='body'
											label='Descriptions'
											fullWidth
											multiline
											value={values.body}
											onChange={handleChange}
											onBlur={handleBlur}
											variant='outlined'
											error={touched.body && Boolean(errors.body)}
											helperText={Boolean(errors.body) && touched.body}
										/>
										<Typography color='error'>
											{errors.body && touched.body && errors.body}
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Button
											type='submit'
											color='primary'
											variant='contained'
											disabled={isSubmitting}>
											Update
										</Button>
									</Grid>
									<Grid item className={classes.loader} xs={9}>
										{isSubmitting === false ? null : (
											<LinearProgress
												variant='buffer'
												style={{ marginTop: '1rem' }}
												value={progress}
												valueBuffer={buffer}
											/>
										)}
									</Grid>
								</Grid>
							</form>
						)}
					</Formik>
				</div>
				{/* <Typography>
					 for testing area = {JSON.stringify(forUpdatePost.editPost)}
				</Typography> */}

				
			</Layout>
		</div>
	);
}
