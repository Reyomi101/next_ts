import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../helper/headStyles';

export default function Footer() {
	const classes = useStyles();
	return (
		<div>
			<AppBar color='secondary' position='static'>
				<Container maxWidth='md'>
					<Toolbar>
						<Typography variant='body1' color='inherit'>
							© 2021 REYOMI
							{/* Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Facilis harum fugiat laboriosam dolor, totam quod nisi
							deserunt obcaecati praesentium ducimus mollitia, distinctio
							officia animi necessitatibus rem! Fugiat quo quas aliquam! lorem
							elit. Facilis harum fugiat laboriosam dolor, totam quod nisi
							deserunt obcaecati praesentium ducimus mollitia, distinctio
							officia animi necessitatibus rem! Fugiat quo quas aliquam! elit.
							Facilis harum fugiat laboriosam dolor, totam quod nisi deserunt
							obcaecati praesentium ducimus mollitia, distinctio officia animi
							necessitatibus rem! Fugiat quo quas aliquam! */}
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}
