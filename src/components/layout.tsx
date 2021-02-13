import React from 'react';
import Head from 'next/head';
import 'fontsource-roboto';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
} from '@material-ui/core';
import useStyles from '../helper/headStyles';
import Link from 'next/link';
import Footer from '../components/footer';

const defaultTitle = 'Next Blog';

export default function Layout(props) {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>{props.title === undefined ? defaultTitle : props.title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<AppBar>
				<Container maxWidth='md'>
					<Toolbar>
						<Typography variant='h6' className={classes.title}>
							REYOMI
						</Typography>
						<Link href='/' passHref>
							<Button color='inherit'>Home</Button>
						</Link>

						<Link href='/add' passHref>
							<Button color='inherit'>+ADD</Button>
						</Link>
					</Toolbar>
				</Container>
			</AppBar>

			<Toolbar />
			<Container maxWidth='md'>{props.children}</Container>
			<Toolbar />
			<Footer />
		</div>
	);
}
