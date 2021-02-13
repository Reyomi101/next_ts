import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../helper/headStyles';

export default function Footer() {
	const classes = useStyles();
	return (
		<div>
			<AppBar position='static' color='secondary' className={classes.footer}>
				<Toolbar>
					<Typography variant='body1' color='inherit' className='pagenator'>
						© 2021 REYOMI
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
