import React, { memo } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { MessageType } from '../types';
import { messageListMainBoxStyle, messageListMainStyle } from '../styles';

interface MessageListProps {
	messages: MessageType[];
	containerRef: React.RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({ messages, containerRef }) => {
	return (
		<Box sx={messageListMainBoxStyle} ref={containerRef}>
			{messages.map((message, index) => (
				<Box key={index} sx={messageListMainStyle(message)}>
					<Paper
						sx={{
							padding: 2,
							maxWidth: '80%',
							backgroundColor: message.type === 'user' ? '#1976d2' : '#e0e0e0',
							color: message.type === 'user' ? '#fff' : '#000',
							wordBreak: 'break-word'
						}}
					>
						<Typography variant="body1">{message.content}</Typography>
					</Paper>
				</Box>
			))}
		</Box>
	);
};

export default memo(MessageList);
