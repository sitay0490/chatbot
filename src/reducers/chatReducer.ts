import { ServiceType } from '../services/APIService';
import { MessageType } from '../types';

export interface Chat {
	name: string;
	messages: MessageType[];
	selectedService: ServiceType;
}

export interface ChatState {
	chatList: Chat[];
	currentChatIndex: number;
	inputMessage: string;
	isLoading: boolean;
}

export type ChatActionType =
	| { type: 'SET_INPUT_MESSAGE'; payload: string }
	| { type: 'ADD_USER_MESSAGE'; payload: string }
	| { type: 'ADD_BOT_MESSAGE'; payload: string }
	| { type: 'UPDATE_LAST_BOT_MESSAGE'; payload: string }
	| { type: 'ADD_NEW_CHAT' }
	| { type: 'SELECT_CHAT'; payload: number }
	| { type: 'CHANGE_SERVICE'; payload: ServiceType };

export const ChatAction = {
	SET_INPUT_MESSAGE: 'SET_INPUT_MESSAGE',
	ADD_USER_MESSAGE: 'ADD_USER_MESSAGE',
	ADD_BOT_MESSAGE: 'ADD_BOT_MESSAGE',
	UPDATE_LAST_BOT_MESSAGE: 'UPDATE_LAST_BOT_MESSAGE',
	ADD_NEW_CHAT: 'ADD_NEW_CHAT',
	SELECT_CHAT: 'SELECT_CHAT',
	CHANGE_SERVICE: 'CHANGE_SERVICE'
} as const;

export const initialState: ChatState = {
	chatList: [{ name: 'Chat 1', messages: [], selectedService: 'openai' }],
	currentChatIndex: 0,
	inputMessage: '',
	isLoading: false
};

export function chatReducer(state: ChatState, action: ChatActionType): ChatState {
	switch (action.type) {
		case ChatAction.SET_INPUT_MESSAGE:
			return { ...state, inputMessage: action.payload };
		case ChatAction.ADD_USER_MESSAGE:
			return {
				...state,
				chatList: state.chatList.map((chat, index) =>
					index === state.currentChatIndex
						? { ...chat, messages: [...chat.messages, { type: 'user', content: action.payload }] }
						: chat
				),
				inputMessage: '',
				isLoading: true
			};
		case ChatAction.ADD_BOT_MESSAGE:
			return {
				...state,
				chatList: state.chatList.map((chat, index) =>
					index === state.currentChatIndex
						? {
								...chat,
								messages: [...chat.messages, { type: 'assistant', content: action.payload }]
						  }
						: chat
				),
				isLoading: false
			};
		case ChatAction.UPDATE_LAST_BOT_MESSAGE:
			return {
				...state,
				chatList: state.chatList.map((chat, index) =>
					index === state.currentChatIndex
						? {
								...chat,
								messages: chat.messages.map((message, i) =>
									i === chat.messages.length - 1 && message.type === 'assistant'
										? { ...message, content: action.payload }
										: message
								)
						  }
						: chat
				)
			};
		case ChatAction.ADD_NEW_CHAT:
			return {
				...state,
				chatList: [
					...state.chatList,
					{ name: `Chat ${state.chatList.length + 1}`, messages: [], selectedService: 'openai' }
				],
				currentChatIndex: state.chatList.length
			};
		case ChatAction.SELECT_CHAT:
			return { ...state, currentChatIndex: action.payload };
		case ChatAction.CHANGE_SERVICE:
			return {
				...state,
				chatList: state.chatList.map((chat, index) =>
					index === state.currentChatIndex ? { ...chat, selectedService: action.payload } : chat
				)
			};
		default:
			return state;
	}
}
