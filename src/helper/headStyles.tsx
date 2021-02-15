import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},
	addform: {
		'& .MuiTextField-root': {
			margin: theme.spacing(2),
		},
		'flexGrow': 1,
	},
	loader: {
		width: '90%',
		paddingTop: '1rem',
	},
	pagenator: {
		marginTop: theme.spacing(2),
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	media: {
		height: 140,
	},
	cards: {
		display: 'flex',
		height: 400,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		maxHeight: '500px',
	},
	footer: {
		top: 'auto',
		bottom: 0,
	},
}));

export default useStyles;
