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
	
	cardBody: {
		height: 100,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		// color: theme.palette.text.secondary,
		// maxHeight: '500px',
		background: 'linear-gradient(45deg, #19857b 10%, #9adcfb 30%)',
		boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
	},
	footer: {
		top: 'auto',
		bottom: 0,
	},
}));

export default useStyles;
