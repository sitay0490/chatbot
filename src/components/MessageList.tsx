import React, { memo } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { MessageType } from '../types';
import { messageListMainStyle, messageBoxStyle, messageListMainBoxStyle } from '../styles';

interface MessageListProps {
	messages: MessageType[];
	containerRef: React.RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({ messages, containerRef }) => {
	return (
		<Box sx={messageListMainBoxStyle} ref={containerRef}>
			{messages.map((message, index) => (
				<Box key={index} sx={messageListMainStyle(message)}>
					<Paper sx={messageBoxStyle(message.type === 'user')}>
						<Typography variant="body1">{message.content}</Typography>
					</Paper>
				</Box>
			))}
		</Box>
	);
};

export default memo(MessageList);
