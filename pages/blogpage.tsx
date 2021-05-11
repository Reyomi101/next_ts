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
import BlogUserInfo from '../src/components/indexItems/blogPageUser'


export default function BlogPage(props) {
	const classes = useStyles();
	const router = useRouter();
	const { title, body, userId, id } = router.query;
	

	return (
		<>
		<Toolbar />
			<Layout title='Blog PAGE' fixed={false}>
				<Typography variant='h3'>Blog PAGE</Typography>
				<Toolbar />
				<BlogUserInfo /> {/* Blog User Avatar here*/}

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
