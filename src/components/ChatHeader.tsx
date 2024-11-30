import React from 'react';
import { Box, FormControlLabel, Switch, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { ChatAction, ChatActionType } from '../reducers/chatReducer';
import { ServiceType, availableServices } from '../services/APIService';
import { chatHeaderStyle } from '../styles';

interface ChatHeaderProps {
	dispatch: React.Dispatch<ChatActionType>;
	currentChat: { selectedService: string };
	onThemeChange: (isDark: boolean) => void;
	isDarkMode: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
	dispatch,
	currentChat,
	onThemeChange,
	isDarkMode
}) => {
	const handleThemeToggle = () => {
		onThemeChange(!isDarkMode);
	};

	const handleServiceChange = (event: SelectChangeEvent<string>) => {
		dispatch({ type: ChatAction.CHANGE_SERVICE, payload: event.target.value as ServiceType });
	};

	return (
		<Box sx={chatHeaderStyle}>
			<FormControlLabel
				control={<Switch checked={isDarkMode} onChange={handleThemeToggle} />}
				label="Theme"
			/>
			<Box>
				<strong>Chat Title:</strong> <span>Itay Sorin AI Chat</span>
			</Box>
			<Select
				value={currentChat.selectedService}
				onChange={handleServiceChange}
				sx={{ width: '150px' }}
			>
				{availableServices.map((service) => (
					<MenuItem key={service} value={service}>
						{service.charAt(0).toUpperCase() + service.slice(1)}
					</MenuItem>
				))}
			</Select>
		</Box>
	);
};

export default ChatHeader;
