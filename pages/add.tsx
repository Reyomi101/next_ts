import React from 'react';
import Layout from '../src/components/layout';
import useStyles from '../src/helper/headStyles';
import {
	TextField,
	Button,
	LinearProgress,
	Grid,
	Typography,
	Toolbar
} from '@material-ui/core';
import AddBlogForm from '../src/forms/addblog/addblogform'



export default function Add() {
	const classes = useStyles();
	

	return (
		<div>
			<Layout title='Add BLOG' fixed={false}>
				<Typography variant='h3'>This is ADD page</Typography>
				<Typography variant='body1'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
					culpa? A odit dolorem illo delectus fuga labore fugiat culpa libero et
					recusandae officia accusantium laborum numquam sit necessitatibus
					fugit, temporibus incidunt veniam modi exercitationem? Quia inventore
					earum aliquam dolorem veniam dicta, minima excepturi officia
					repudiandae culpa ea explicabo dolores sunt.
				</Typography>
				<hr />
				<div className={classes.addform}>
					<AddBlogForm />
				</div>
				<Toolbar />
				<Toolbar />
				<Toolbar />
				<Toolbar />
				<Toolbar />
				<Toolbar />
			</Layout>
		</div>
	);
}
