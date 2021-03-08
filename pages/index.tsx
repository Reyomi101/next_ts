import Layout from '../src/components/layout';
import useStyles from '../src/helper/headStyles';
import { Typography, Toolbar, Container, Avatar } from '@material-ui/core';
import MainPosts from '../src/components/indexItems/Posts';
// import {startFetchingPosts} from '../src/redux/actions/mainAction'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'



export default function Home() {
	const classes = useStyles();

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
				</Typography>

						
				<MainPosts /> {/* ALL POSTS ARE HERE */}


			</Layout>
		</div>
	);
}
