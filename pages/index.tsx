import Layout from '../src/components/layout';
import Link from 'next/link';
import useStyles from '../src/helper/headStyles';
import Pagination from '@material-ui/lab/Pagination';
import { usePagination, Skeleton } from '@material-ui/lab';
import {
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	CardMedia,
	Typography,
	Paper,
	Button,
	Grid,
	Toolbar,
	Container,
	Avatar,
	Divider,
	IconButton,
	Tooltip,
	Fade,
	CircularProgress,
} from '@material-ui/core';
import { WebClient } from '../src/api/webclient';
import { useState, useEffect } from 'react';
import { TablePagination } from '@material-ui/core';
import { number } from 'yup';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Remove_Post } from '../src/redux/actions/mainAction';
import { Show_posts } from '../src/redux/actions/mainAction';

const blogPost = createSelector(
	(state: any) => state.main,
	(newposts) => newposts
);

const ToRemovePost = createSelector(
	(state: any) => state.main,
	(newposts) => newposts
);

const ForShowPost = createSelector(
	(state: any) => state.main,
	(postItems) => postItems
);

function paginator(array, limit, page) {
	return array.slice((page - 1) * limit, page * limit);
}

export default function Home() {
	const classes = useStyles();
	const [pageItems, setPageitems] = useState([]);
	const [items, setItems] = useState([]);
	const [newPost, setNewPost] = useState([]);
	const [loader, setLoader] = useState(true);
	const [limit, setLimit] = useState(6);
	const [page, setPage] = useState(1);
	const mainReducer = useSelector(blogPost);
	const removeThis = useSelector(ToRemovePost);
	const showPosts = useSelector(ForShowPost);

	const ratetotal = items.length / limit;
	const total = Math.round(ratetotal);

	// console.log(mainReducer);

	const handleChange = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		// setLoader(true);
		setTimeout(() => {
			Show_posts();
			setPage(newPage);
			setPageitems(paginator(items, limit, page));
			// setLoader(false);
		}, 3000);
	};

	const ForRemove = (props) => {
		Remove_Post(props);
		setPageitems(paginator(removeThis.newposts, limit, page));
		setPageitems(paginator(removeThis.postItems, limit, page));
	};

	useEffect(() => {
		// setLoader(true);

		setTimeout(() => {
			Show_posts();
			setNewPost(mainReducer.newposts);
			setItems(mainReducer.newposts);
			setPageitems(paginator(showPosts.postItems, limit, page));
			// setLoader(false);
		}, 3000);
	}, []);

	return (
		<div>
			<Toolbar />
			<Container maxWidth='lg'>
				<div className={classes.imagedex}>
					<Avatar
						variant='square'
						style={{
							width: '100%',
							height: '25rem',
							color: '#fff',
							backgroundColor: '#eee',
						}}>
						Sample IMAGE
					</Avatar>
				</div>
			</Container>
			<Layout title='Tsx NEXT blog'>
				<Typography variant='h3'>Articles</Typography>

				<Typography variant='body2'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
					voluptatem illum sapiente nisi ab! Eligendi consequuntur sapiente
					architecto vitae natus neque veniam voluptatem enim. Explicabo
					accusamus consequatur voluptatibus quisquam fugiat!
					{/* {JSON.stringify(mainReducer.newposts)} */}
					{/* {JSON.stringify(showPosts.postItems)} */}
				</Typography>

				<Grid
					container
					spacing={3}
					direction='row'
					justify='space-around'
					alignItems='center'
					className={classes.Grids}>
					{/* {loader === true ? (
						<Skeleton variant='rect' width='100%'>
							<div style={{ paddingTop: '57%', marginTop: '20px' }} />
						</Skeleton>
					) : ( */}

					{pageItems.map((item, idx) => {
						return (
							<Grid item lg={4} md={6} sm={6}>
								<Paper className={classes.paper}>
									<Card>
										<CardContent>
											<div className={classes.delButton}>
												<Tooltip
													title='Remove'
													placement='top'
													TransitionComponent={Fade}
													TransitionProps={{ timeout: 600 }}
													arrow>
													<IconButton
														aria-label='delete'
														size='small'
														className={classes.delicon}
														color='secondary'
														onClick={() => {
															ForRemove(item);
														}}>
														<DeleteForeverOutlinedIcon fontSize='inherit' />
													</IconButton>
												</Tooltip>
											</div>
											<Typography gutterBottom variant='button' component='h2'>
												{item.title === undefined
													? showPosts.postItems.title
													: item.title}
											</Typography>

											<Typography
												variant='caption'
												component='p'
												className={classes.cardBody}>
												{item.body === undefined
													? showPosts.postItems.body
													: item.body}
											</Typography>
										</CardContent>

										<CardActions></CardActions>
									</Card>
									<div className={classes.bottomcard}>
										<Typography
											variant='caption'
											component='p'
											className={classes.pageno}>
											{item.userId === undefined
												? showPosts.postItems.userId
												: item.userId}
											,
											{item.id === undefined ? showPosts.postItems.id : item.id}
										</Typography>
										<div className={classes.linkButton}>
											<Link
												key={idx}
												href={{ pathname: '/blogpage', query: item }}
												passHref>
												<Button
													component='a'
													size='small'
													color='primary'
													variant='contained'>
													Learn More
												</Button>
											</Link>
										</div>
									</div>
								</Paper>
							</Grid>
						);
					})}

					{/* )} */}
				</Grid>

				<Toolbar />
				<div className={classes.pagenator}>
					<Pagination
						count={total}
						page={page}
						onChange={handleChange}
						defaultPage={2}
						color='primary'
						size='large'
						shape='rounded'
						showFirstButton
						showLastButton
					/>
				</div>
				<Toolbar />
			</Layout>
		</div>
	);
}
