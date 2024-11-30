import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1976d2'
		},
		secondary: {
			main: '#f50057'
		}
	}
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#90caf9'
		},
		secondary: {
			main: '#f50057'
		}
	}
});
