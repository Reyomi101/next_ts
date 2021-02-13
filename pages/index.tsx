import Layout from '../src/components/layout';
import Link from 'next/link';
import useStyles from '../src/helper/headStyles';
import Pagination from '@material-ui/lab/Pagination';
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

export default function Home() {
	const classes = useStyles();
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
					<Grid item xs>
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
											<Typography gutterBottom variant='h5' component='h2'>
												Lizard
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
												component='p'>
												Lizards are a widespread group of squamate reptiles,
												with over 6,000 species, ranging across all continents
												except Antarctica
											</Typography>
										</CardContent>
									</CardActionArea>
								</Link>
							</Card>
						</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>
							<Card>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										Kung Hei Fat Choy!!!
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Repellat, consequuntur optio molestias nihil voluptatem aut?
										Nisi ducimus nam ipsa perspiciatis, officiis quia veritatis
										iste dolore doloremque, esse deserunt quos itaque.
									</Typography>
								</CardContent>
							</Card>
						</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>
							<Card className={classes.cards}>
								<CardContent>
									<Typography component='h5' variant='h5'>
										Live From Space
									</Typography>
									<Typography variant='body2' color='textSecondary'>
										Mac Miller Lorem ipsum dolor, sit amet consectetur
										adipisicing elit. Repudiandae velit fugit exercitationem
										illum.
									</Typography>
								</CardContent>

								<CardMedia
									className={classes.media}
									image='/static/images/cards/live-from-space.jpg'
									title='Live from space album cover'
								/>
							</Card>
						</Paper>
					</Grid>
				</Grid>
				<Toolbar />
				<div className={classes.pagenator}>
					<Pagination count={5} />
				</div>
			</Layout>
		</div>
	);
}
