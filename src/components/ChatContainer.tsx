import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import MessageList from './MessageList';
import InputSection from './InputSection';
import { ChatAction, ChatActionType } from '../reducers/chatReducer';
import { MessageType } from '../types';
import { chatContainerStyle } from '../styles';

interface ChatContainerProps {
	messages: MessageType[];
	inputMessage: string;
	dispatch: React.Dispatch<ChatActionType>;
	handleMessageSend: () => void;
	isLoading: boolean;
	containerRef: React.RefObject<HTMLDivElement>;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
	messages,
	inputMessage,
	dispatch,
	handleMessageSend,
	isLoading,
	containerRef
}) => {
	const disableSend = useMemo(() => isLoading || !inputMessage.trim(), [isLoading, inputMessage]);

	return (
		<Box sx={chatContainerStyle}>
			<MessageList messages={messages} containerRef={containerRef} />
			<InputSection
				inputMessage={inputMessage}
				setInputMessage={(message) =>
					dispatch({ type: ChatAction.SET_INPUT_MESSAGE, payload: message as string })
				}
				handleMessageSend={handleMessageSend}
				isLoading={isLoading}
				disableSend={disableSend}
			/>
		</Box>
	);
};

export default ChatContainer;
