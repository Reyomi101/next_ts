import React from 'react';
import Layout from '../src/components/layout';
import useStyles from '../src/helper/headStyles';
import { useState, useEffect } from "react";
import {
	TextField,
	Button,
	LinearProgress,
	Grid,
	Typography,
	Toolbar
} from '@material-ui/core';

import { useRouter } from "next/router";

export default function EditBlog() {
	const classes = useStyles();
	const [progress, setProgress] = useState(0);
	const [buffer, setBuffer] = useState(10);

    const router = useRouter();
    const { title, body, userId, id } = router.query;

    const [titles, setTitle] = useState(title);
    const [bodys, setBody] = useState(body);

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
     
      };


      const handleChangeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBody(event.target.value);
     
      };
     

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
			<Layout title='Add BLOG' fixed={false}>
				<Typography variant='h3'>This is EDIT Blog</Typography>
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
									value={titles}
                                    onChange={handleChangeTitle}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id='outlined-multiline-static'
									label='Descriptions'
									style={{ margin: 8 }}
									fullWidth
									multiline
                                    value={bodys}
                                    onChange={handleChangeBody}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={3}>
								<Button type='submit' color='primary' variant='contained'>
									Submit
								</Button>
							</Grid>
							<Grid item className={classes.loader} xs={9}>
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
