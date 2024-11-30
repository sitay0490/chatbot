import React, { useReducer, useRef, useCallback } from 'react';
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import ChatSidebar from './ChatSidebar';
import ChatContainer from './ChatContainer';
import {
	chatReducer,
	initialState,
	ChatAction,
	ChatState,
	ChatActionType
} from '../reducers/chatReducer';
import useScrollToBottom from '../hooks/useScrollToBottom';
import { APIService } from '../services/APIService';
import { aIChatBotStyle, mainBoxStyle } from '../styles';

interface AIChatBotProps {
	onThemeChange: (isDark: boolean) => void;
	isDarkMode: boolean;
}

const AIChatBot: React.FC<AIChatBotProps> = ({ onThemeChange, isDarkMode }) => {
	const [state, dispatch] = useReducer<React.Reducer<ChatState, ChatActionType>>(
		chatReducer,
		initialState
	);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const { chatList, currentChatIndex, inputMessage, isLoading } = state;
	const currentChat = chatList[currentChatIndex];
	const messages = currentChat.messages.slice(-10).map((msg) => ({
		role: msg.type === 'assistant' ? 'assistant' : (msg.type as 'user' | 'assistant' | 'system'),
		content: msg.content
	}));

	useScrollToBottom(containerRef, currentChat.messages);

	const handleMessageSend = useCallback(async () => {
		if (!inputMessage.trim()) return;

		dispatch({ type: ChatAction.ADD_USER_MESSAGE, payload: inputMessage });

		try {
			const client = APIService.getClient(currentChat.selectedService);
			messages.push({ role: 'user', content: inputMessage });

			const response = await client.getResponse(messages);

			dispatch({ type: ChatAction.ADD_BOT_MESSAGE, payload: '' });

			let accumulatedResponse = '';
			for (let i = 0; i < response.length; i++) {
				accumulatedResponse += response[i];
				await new Promise((resolve) => setTimeout(resolve, 50));
				dispatch({ type: ChatAction.UPDATE_LAST_BOT_MESSAGE, payload: accumulatedResponse });
			}
		} catch (error) {
			dispatch({
				type: ChatAction.UPDATE_LAST_BOT_MESSAGE,
				payload: 'Error in response'
			});
		}
	}, [inputMessage, currentChat.selectedService, messages, dispatch]);

	return (
		<Box sx={aIChatBotStyle}>
			<ChatHeader
				dispatch={dispatch}
				currentChat={currentChat}
				onThemeChange={onThemeChange}
				isDarkMode={isDarkMode}
			/>
			<Box sx={mainBoxStyle}>
				<ChatSidebar chatList={chatList} currentChatIndex={currentChatIndex} dispatch={dispatch} />
				<ChatContainer
					messages={currentChat.messages}
					inputMessage={inputMessage}
					dispatch={dispatch}
					handleMessageSend={handleMessageSend}
					isLoading={isLoading}
					containerRef={containerRef}
				/>
			</Box>
		</Box>
	);
};

export default AIChatBot;
