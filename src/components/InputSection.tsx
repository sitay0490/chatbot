import React from 'react';
import { Box, TextField, Button, CircularProgress } from '@mui/material';

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
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
			<TextField
				fullWidth
				value={inputMessage}
				onChange={(e) => setInputMessage(e.target.value)}
				placeholder="Enter your message..."
				sx={{ marginRight: 2 }}
			/>
			<Button
				variant="contained"
				color="primary"
				onClick={handleMessageSend}
				disabled={disableSend}
			>
				{isLoading ? <CircularProgress size={24} /> : 'Send'}
			</Button>
		</Box>
	);
};

export default InputSection;
