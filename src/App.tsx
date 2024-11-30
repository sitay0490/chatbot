import React from 'react';
import AIChatBot from './components/AIChatBot';

interface AppProps {
	onThemeChange: (isDark: boolean) => void;
	isDarkMode: boolean;
}

const App: React.FC<AppProps> = ({ onThemeChange, isDarkMode }) => {
	return (
		<div className="App">
			<AIChatBot onThemeChange={onThemeChange} isDarkMode={isDarkMode} />
		</div>
	);
};

export default App;
