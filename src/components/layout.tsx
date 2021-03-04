import React from 'react';
import Head from 'next/head';
import 'fontsource-roboto';
import { Toolbar, Container, Avatar } from '@material-ui/core';
import useStyles from '../helper/headStyles';

import Footer from '../components/footer';
import Appbar from '../components/appbar';

const defaultTitle = 'Next Blog';

export default function Layout(props) {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>{props.title === undefined ? defaultTitle : props.title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Appbar {...props} />

			<Toolbar />
			<Container maxWidth='md'>{props.children}</Container>
			<Toolbar />
			<Footer fixed={props.fixed} />
		</div>
	);
}
