import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { lightTheme, darkTheme } from './theme';
import './index.css';

const Root = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<CssBaseline />
			<App onThemeChange={setIsDarkMode} isDarkMode={isDarkMode} />
		</ThemeProvider>
	);
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
