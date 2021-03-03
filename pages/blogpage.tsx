import useStyles from '../src/helper/headStyles';
import Layout from '../src/components/layout';
import Link from 'next/link';
import {
	Typography,
	Avatar,
	Grid,
	TextField,
	Toolbar,
	Button,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Paper,
	Tooltip,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import IconButton from '@material-ui/core/IconButton';
import { Formik } from 'formik';
import { BlogComment } from '../src/helper/validation/yup';
import { useRouter } from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { createStore } from 'redux';
import {
	Create_comment,
	Remove_Comment,
	Update_post,
} from '../src/redux/actions/mainAction';
import { CommentSharp } from '@material-ui/icons';

const ForComment = createSelector(
	(state: any) => state.main,
	(comments) => comments
);

const ToRemoveComment = createSelector(
	(state: any) => state.main,
	(comments) => comments
);

const UpdatedPost = createSelector(
	(state: any) => state.main,
	(newposts) => newposts
);

export default function BlogPage(props) {
	const classes = useStyles();
	const router = useRouter();
	const { title, body, userId, id } = router.query;
	const mainReducer = useSelector(ForComment);
	const removeThis = useSelector(ToRemoveComment);
	const updatePost = useSelector(UpdatedPost);
	const [comlist, setComlist] = useState([]);
	const [updated, setUpdated] = useState([]);

	useEffect(() => {
		setComlist(mainReducer.comments.filter((comment) => comment.id === id));
	}, []);

	const ForRemove = (props) => {
		Remove_Comment(props);
		setComlist(removeThis.comments.filter((comment) => comment.id === id));
	};

	useEffect(() => {
		const Updated_Posts = (props) => {
			Update_post(props);
			alert(JSON.stringify(props));
			setUpdated(updatePost.newpost.felter((postId) => postId.id === id));
		};
	});

	const SearchButton = () => (
		// <div className={classes.buttonIcon}>
		<IconButton type='submit' color='primary'>
			<Tooltip title='Tab + Enter' placement='right' arrow>
				{/* {isSubmitting  ? ( */}
				<SendIcon fontSize='large' />
				{/* ) : (
					<CircularProgress disableShrink />
				)} */}
			</Tooltip>
		</IconButton>
		// </div>
	);

	return (
		<>
			<Layout title='Blog PAGE' fixed={false}>
				<Typography variant='h3'>Blog PAGE</Typography>

				<Grid container spacing={2}>
					<Grid item lg={4} sm={6} xs={12}>
						<div className={classes.avatars}>
							<Avatar
								alt='Reyomi'
								style={{
									width: '10rem',
									height: '10rem',
									color: '#fff',
									backgroundColor: '#19857b',
								}}
							/>
						</div>

						{/* <Typography variant="h5" className={classes.avatars}>
              User ID: {userId}
            </Typography>
            <Typography variant="h5" className={classes.avatars}>
              Blog ID: {id}
            </Typography> */}
					</Grid>

					<Grid item md={8} sm={6} xs={12}>
						<div className={classes.editButton}>
							<Avatar
								variant='rounded'
								style={{
									width: '100%',
									height: '20rem',
									color: '#fff',
									backgroundColor: '#eee',
								}}>
								Sample IMAGE
							</Avatar>
						</div>
					</Grid>
				</Grid>

				<Grid container spacing={2} className={classes.Grids}>
					<Grid item md={9}>
						<Typography variant='h4'>{title}</Typography>
					</Grid>
					<Grid item md={3}>
						<div className={classes.editButton}>
							<Link
								href={{
									pathname: '/editblog',
									query: { userId, id, title, body },
								}}
								passHref>
								<Button
									// target="_blank"
									component='a'
									size='small'
									color='primary'
									variant='contained'>
									Edit Post
								</Button>
							</Link>
						</div>
					</Grid>
				</Grid>

				<Typography variant='body1'>{body}</Typography>

				<Toolbar />
				<Typography variant='body2'>hello {JSON.stringify(updated)}</Typography>
				<Toolbar />
				<Formik
					initialValues={{ commentBody: '' }}
					validationSchema={BlogComment}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						setTimeout(() => {
							Create_comment({
								commentBody: values.commentBody,
								id: id,
							});
							setComlist(
								mainReducer.comments.filter((comment) => comment.id === id)
							);

							setSubmitting(false);
							resetForm();
						}, 100);
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
							<TextField
								id='commentBody'
								name='commentBody'
								label='Comment:'
								variant='outlined'
								fullWidth
								multiline
								InputProps={{
									// endAdornment: <SearchButton />,
									endAdornment: (
										<IconButton type='submit' color='primary'>
											<Tooltip title='Tab + Enter' placement='right' arrow>
												{isSubmitting ? (
													<CircularProgress disableShrink />
												) : (
													<SendIcon fontSize='large' />
												)}
											</Tooltip>
										</IconButton>
									),
								}}
								value={values.commentBody}
								onChange={handleChange}
								onBlur={handleBlur}
								error={touched.commentBody && Boolean(errors.commentBody)}
								helperText={Boolean(errors.commentBody) && touched.commentBody}
							/>
							<Typography color='error'>
								{errors.commentBody &&
									touched.commentBody &&
									errors.commentBody}
							</Typography>
							{/* <div className={classes.buttonIcon}>
								{isSubmitting === false ? null : (
									<CircularProgress disableShrink />
								)}
							</div> */}
						</form>
					)}
				</Formik>

				<Paper>
					<List
						component='nav'
						aria-labelledby='nested-list-subheader'
						subheader={
							<ListSubheader component='div' id='nested-list-subheader'>
								Nested Comments
							</ListSubheader>
						}
						className={classes.listItem}>
						<Divider />
						{comlist
							.map((coms) => {
								return (
									<>
										<ListItem style={{ whiteSpace: 'normal' }}>
											<ListItemIcon>
												<AccountCircleIcon fontSize='large' color='secondary' />
											</ListItemIcon>
											<ListItemText>{coms.commentBody}</ListItemText>
											<div
												className={classes.delButton2}
												style={{ marginRight: '-20px' }}>
												<ListItemIcon>
													<Tooltip title='Uncomment' placement='right' arrow>
														<IconButton
															aria-label='delete'
															size='small'
															className={classes.delicon}
															color='secondary'
															onClick={() => {
																ForRemove(coms);
															}}>
															{onclick ? (
																setTimeout(() => {
																	<CircularProgress disableShrink />;
																}, 5000)
															) : (
																<DeleteForeverOutlinedIcon />
															)}
														</IconButton>
													</Tooltip>
													{/* <DeleteForeverOutlinedIcon fontSize="small"  /> */}
												</ListItemIcon>
											</div>
										</ListItem>
										<Divider />
									</>
								);
							})
							.reverse()}
					</List>
				</Paper>
			</Layout>
		</>
	);
}
