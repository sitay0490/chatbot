import { SxProps, Theme } from '@mui/material';
import { MessageType } from './types';

export const aIChatBotStyle: SxProps<Theme> = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	padding: 2,
	width: '100vw',
	bgcolor: 'background.default',
	color: 'text.primary'
};

export const mainBoxStyle: SxProps<Theme> = {
	display: 'flex',
	flex: 1,
	border: '1px solid',
	borderColor: 'divider',
	borderRadius: 1,
	overflow: 'hidden'
};

export const chatHeaderStyle: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: 2
};

export const chatContainerStyle: SxProps<Theme> = {
	width: '75%',
	padding: 2,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between'
};

export const chatSidebarMainStyle: SxProps<Theme> = {
	height: '40px',
	width: '100%',
	cursor: 'pointer',
	padding: '10px'
};

export const createChatSidebarChatStyle = (
	currentChatIndex: number,
	index: number
): SxProps<Theme> => ({
	height: '40px',
	width: '100%',
	cursor: 'pointer',
	padding: '10px',
	color: currentChatIndex === index ? 'primary.contrastText' : 'text.primary',
	bgcolor: currentChatIndex === index ? 'primary.main' : 'transparent',
	'&:hover': {
		bgcolor: currentChatIndex === index ? 'primary.dark' : 'action.hover'
	}
});

export const messageListMainStyle = (message: MessageType): SxProps<Theme> => {
	return {
		display: 'flex',
		justifyContent: message.type === 'user' ? 'flex-start' : 'flex-end',
		mb: 1
	};
};
export const messageListMainBoxStyle: SxProps<Theme> = {
	flex: 1,
	overflowY: 'auto',
	marginBottom: 2
};
