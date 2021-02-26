import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2196F3',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
		warning: {
			main: '#ff0011',
		},
		background: {
			// default: 'linear-gradient(to top, #e0f7fa, #4fc3f7)',
			default: '#fff',
			// default: 'linear-gradient(to top, #e0f7fa, #beebf6, #9bdff4, #77d1f5, #4fc3f7)',
		},
	},



});

export default theme;
