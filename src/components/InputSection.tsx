import React from 'react';
import { Box, TextField, Button, CircularProgress } from '@mui/material';
import { Send } from '@mui/icons-material';
import { inputSectionStyle } from '../styles';

interface InputSectionProps {
	inputMessage: string;
	setInputMessage: React.Dispatch<React.SetStateAction<string>>;
	handleMessageSend: () => void;
	isLoading: boolean;
	disableSend: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({
	inputMessage,
	setInputMessage,
	handleMessageSend,
	isLoading,
	disableSend
}) => {
	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey && !disableSend) {
			e.preventDefault();
			handleMessageSend();
		}
	};

	return (
		<Box sx={inputSectionStyle}>
			<TextField
				fullWidth
				multiline
				maxRows={4}
				value={inputMessage}
				onChange={(e) => setInputMessage(e.target.value)}
				onKeyDown={handleKeyPress}
				placeholder="Type your message..."
				variant="outlined"
				size="small"
			/>
			<Button
				variant="contained"
				color="primary"
				onClick={handleMessageSend}
				disabled={disableSend}
				sx={{ minWidth: '100px' }}
			>
				{isLoading ? <CircularProgress size={24} color="inherit" /> : <Send />}
			</Button>
		</Box>
	);
};

export default InputSection;
