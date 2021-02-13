import Layout from '../src/components/layout';
import useStyles from '../src/helper/headStyles';

export default function Add(props) {
	const classes = useStyles();
	return (
		<div>
			<Layout>
				<h1>This is ADD page</h1>
			</Layout>
		</div>
	);
}
