import { SxProps } from '@mui/material';
import { MessageType } from './types';

export const aIChatBotStyle: SxProps = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	padding: 2,
	width: '100vw'
};

export const mainBoxStyle: SxProps = {
	display: 'flex',
	flex: 1,
	border: '1px solid #ccc',
	borderRadius: 1,
	overflow: 'hidden'
};

export const chatHeaderStyle: SxProps = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: 2
};

export const chatContainerStyle: SxProps = {
	width: '75%',
	padding: 2,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between'
};

export const chatSidebarMainStyle: SxProps = {
	height: '40px',
	width: '100%',
	cursor: 'pointer',
	padding: '10px'
};

export const createChatSidebarChatStyle = (currentChatIndex: number, index: number): SxProps => ({
	height: '40px',
	width: '100%',
	cursor: 'pointer',
	padding: '10px',
	color: currentChatIndex === index ? 'white' : 'black',
	backgroundColor: currentChatIndex === index ? '#1976d2' : 'transparent',
	'&:hover': {
		backgroundColor: currentChatIndex === index ? '#1976d2' : 'darkgray'
	}
});

export const messageListMainStyle = (message: MessageType): SxProps => {
	return {
		display: 'flex',
		justifyContent: message.type === 'user' ? 'flex-start' : 'flex-end',
		mb: 1
	};
};
export const messageListMainBoxStyle: SxProps = { flex: 1, overflowY: 'auto', marginBottom: 2 };
