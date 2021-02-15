import Layout from '../src/components/layout';
import Link from 'next/link';
import useStyles from '../src/helper/headStyles';
import Pagination from '@material-ui/lab/Pagination';
import { usePagination, Skeleton } from '@material-ui/lab';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
	Paper,
	Grid,
	Toolbar,
} from '@material-ui/core';
import { WebClient } from '../src/api/webclient';
import { useState, useEffect } from 'react';
import { TablePagination } from '@material-ui/core';

function paginator(array, page_size, page_number) {
	return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export default function Home() {
	const [pageItems, setPageitems] = useState([]);
	const [page, setPage] = useState(1);
	const [items, setItems] = useState([]);
	const [limit, setLimit] = useState(3);
	const [loader, setLoader] = useState(false);

	const classes = useStyles();

	useEffect(() => {
		setLoader(true);
		WebClient.get('/posts').then((res) => {
			setItems(res.data);
			setPageitems(paginator(res.data, limit, page));
			setLoader(false);
		});
	}, []);

	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setLoader(true);
		setPage(newPage);
		setPageitems(paginator(items, limit, page));
		setLoader(false);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setLoader(true);
		setLimit(parseInt(event.target.value, limit));

		setPageitems(paginator(items, limit, page));
		setLoader(false);
	};

	return (
		<div>
			<Layout title='Tsx NEXT blog'>
				<Typography variant='h3'>Articles</Typography>

				<Typography variant='subtitle2'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
					voluptatem illum sapiente nisi ab! Eligendi consequuntur sapiente
					architecto vitae natus neque veniam voluptatem enim. Explicabo
					accusamus consequatur voluptatibus quisquam fugiat!
				</Typography>
				<hr />
				<Grid container spacing={3}>
					{loader === true ? (
						<Skeleton variant='rect' height={400} />
					) : (
						pageItems.map((item) => {
							return (
								<Grid item lg={4} md={6} sm={12}>
									<Paper className={classes.paper}>
										<Card className={classes.cards}>
											<Link href='/blogpage' passHref>
												<CardActionArea>
													<CardMedia
														className={classes.media}
														image='/static/images/cards/contemplative-reptile.jpg'
														title='Contemplative Reptile'
													/>
													<CardContent>
														<Typography
															gutterBottom
															variant='h5'
															component='h2'>
															{item.title}
														</Typography>
														<Typography
															variant='body2'
															color='textSecondary'
															component='p'>
															{item.body}
														</Typography>
													</CardContent>
												</CardActionArea>
											</Link>
										</Card>
									</Paper>
								</Grid>
							);
						})
					)}
				</Grid>
				<Toolbar />
				<div className={classes.pagenator}>
					<TablePagination
						defaultValue={3}
						rowsPerPageOptions={[3, 5, 10, 25, 50, 75, 100]}
						component='div'
						count={items.length}
						page={page}
						onChangePage={handleChangePage}
						rowsPerPage={limit}
						onChangeRowsPerPage={handleChangeRowsPerPage}
					/>
				</div>
			</Layout>
		</div>
	);
}
