import React, { useState } from 'react';
import { Box, Divider, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ChatAction, ChatActionType } from '../reducers/chatReducer';
import {
	chatSidebarStyle,
	chatSidebarMainStyle,
	createChatSidebarChatStyle,
	mobileDrawerStyle
} from '../styles';

interface ChatSidebarProps {
	chatList: { name: string }[];
	currentChatIndex: number;
	dispatch: React.Dispatch<ChatActionType>;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ chatList, currentChatIndex, dispatch }) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const sidebarContent = (
		<>
			<Box sx={{ p: 2 }}>Previous Chats</Box>
			<Divider />
			<Box
				onClick={() => {
					dispatch({ type: ChatAction.ADD_NEW_CHAT });
					setMobileOpen(false);
				}}
				sx={chatSidebarMainStyle}
			>
				New Chat
			</Box>
			{chatList.map((chat, index) => (
				<Box
					key={index}
					sx={createChatSidebarChatStyle(currentChatIndex, index)}
					onClick={() => {
						dispatch({ type: ChatAction.SELECT_CHAT, payload: index });
						setMobileOpen(false);
					}}
				>
					{chat.name}
				</Box>
			))}
		</>
	);

	return (
		<>
			<IconButton
				sx={{
					display: { xs: 'block', md: 'none' },
					position: 'fixed',
					top: 10,
					left: 10,
					zIndex: 1200
				}}
				onClick={handleDrawerToggle}
			>
				<MenuIcon />
			</IconButton>

			<Box sx={chatSidebarStyle}>{sidebarContent}</Box>

			<Drawer
				variant="temporary"
				anchor="left"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				sx={mobileDrawerStyle}
			>
				{sidebarContent}
			</Drawer>
		</>
	);
};

export default ChatSidebar;
