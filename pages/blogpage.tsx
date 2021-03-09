import useStyles from '../src/helper/headStyles';
import Layout from '../src/components/layout';
import {
	Typography,
	Avatar,
	Grid,
	Toolbar,
	Divider,
	List,
	ListSubheader,
	Paper,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import BlogPageContent from '../src/components/indexItems/blogPageContent'
import BlogComment from '../src/components/indexItems/blogPageComment'


export default function BlogPage(props) {
	const classes = useStyles();
	const router = useRouter();
	const { title, body, userId, id } = router.query;
	

	return (
		<>
			<Layout title='Blog PAGE' fixed={false}>
				<Typography variant='h3'>Blog PAGE</Typography>

				<Grid container spacing={2}>
					<Grid item lg={3} md={3} sm={4} xs={12}>
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
					</Grid>

					<Grid item lg={9} md={9} sm={8} xs={12}>
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


				<BlogPageContent />	 {/* Blog Content here*/}				
				

				<Toolbar />
				<Typography variant='body2'>
					{/* test area {JSON.stringify(updatePost.editPost)} */}
				</Typography>
				<Toolbar />

				<BlogComment />  {/* Comments area here */}

				
			</Layout>
		</>
	);
}
