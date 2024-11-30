import React from 'react';
import { Box, Divider } from '@mui/material';
import { ChatAction, ChatActionType } from '../reducers/chatReducer';
import { chatSidebarMainStyle, createChatSidebarChatStyle } from '../styles';

interface ChatSidebarProps {
	chatList: { name: string }[];
	currentChatIndex: number;
	dispatch: React.Dispatch<ChatActionType>;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ chatList, currentChatIndex, dispatch }) => {
	const handleNewChat = () => {
		dispatch({ type: ChatAction.ADD_NEW_CHAT });
	};

	const handleChatSelect = (index: number) => {
		if (index !== currentChatIndex) {
			dispatch({ type: ChatAction.SELECT_CHAT, payload: index });
		}
	};

	return (
		<Box sx={{ width: '25%', backgroundColor: '#e0e0e0' }}>
			<div style={{ height: '40px', padding: '10px' }}>Previous Chats</div>
			<Divider sx={{ marginTop: 1 }} />
			<Box onClick={handleNewChat} sx={chatSidebarMainStyle}>
				New Chat
			</Box>
			{chatList.map((chat, index) => (
				<Box
					key={index}
					sx={createChatSidebarChatStyle(currentChatIndex, index)}
					onClick={() => handleChatSelect(index)}
				>
					{chat.name}
				</Box>
			))}
		</Box>
	);
};

export default ChatSidebar;
