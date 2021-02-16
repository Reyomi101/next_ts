import React from 'react';
import Layout from '../src/components/layout';
import useStyles from '../src/helper/headStyles';
import {
	TextField,
	Button,
	LinearProgress,
	Grid,
	Typography,
} from '@material-ui/core';

export default function Add() {
	const classes = useStyles();
	const [progress, setProgress] = React.useState(0);
	const [buffer, setBuffer] = React.useState(10);

	const progressRef = React.useRef(() => {});
	React.useEffect(() => {
		progressRef.current = () => {
			if (progress > 100) {
				setProgress(0);
				setBuffer(10);
			} else {
				const diff = Math.random() * 10;
				const diff2 = Math.random() * 10;
				setProgress(progress + diff);
				setBuffer(progress + diff + diff2);
			}
		};
	});

	React.useEffect(() => {
		const timer = setInterval(() => {
			progressRef.current();
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			<Layout title='Add BLOG' fixed={true}>
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
					<form noValidate autoComplete='off'>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<TextField
									id='outlined-full-width'
									label='Subject Tilte'
									style={{ margin: 8 }}
									fullWidth
									margin='normal'
									variant='filled'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id='outlined-multiline-static'
									label='Descriptions'
									style={{ margin: 8 }}
									fullWidth
									multiline
									variant='filled'
								/>
							</Grid>
							<Grid item xs={2}>
								<Button type='submit' color='primary' variant='contained'>
									Submit
								</Button>
							</Grid>
							<Grid item className={classes.loader} xs={10}>
								<LinearProgress
									variant='buffer'
									style={{ marginTop: '1rem' }}
									value={progress}
									valueBuffer={buffer}
								/>
							</Grid>
						</Grid>
					</form>
				</div>
			</Layout>
		</div>
	);
}
