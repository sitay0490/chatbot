import { SxProps, Theme } from '@mui/material';
import { MessageType } from './types';

export const aIChatBotStyle: SxProps<Theme> = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	width: '100vw',
	overflow: 'hidden'
};

export const mainBoxStyle: SxProps<Theme> = {
	display: 'flex',
	flex: 1,
	flexDirection: { xs: 'column', md: 'row' },
	overflow: 'hidden',
	bgcolor: 'background.paper'
};

export const chatHeaderStyle: SxProps<Theme> = {
	display: 'flex',
	flexDirection: { xs: 'column', sm: 'row' },
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: { xs: 1, sm: 2 },
	padding: { xs: 1, sm: 2 },
	borderBottom: 1,
	borderColor: 'divider',
	bgcolor: 'background.paper'
};

export const chatContainerStyle: SxProps<Theme> = {
	width: { xs: '100%', md: '75%' },
	height: { xs: 'calc(100vh - 140px)', md: '100%' },
	display: 'flex',
	flexDirection: 'column'
};

export const chatSidebarStyle: SxProps<Theme> = {
	width: { xs: '100%', md: '25%' },
	height: { xs: 'auto', md: '100%' },
	display: { xs: 'none', md: 'block' },
	borderRight: { xs: 0, md: 1 },
	borderColor: 'divider',
	bgcolor: 'background.paper',
	overflow: 'auto'
};

export const chatSidebarMainStyle: SxProps<Theme> = {
	padding: { xs: 1, sm: 2 },
	cursor: 'pointer',
	'&:hover': {
		bgcolor: 'action.hover'
	}
};

export const createChatSidebarChatStyle = (
	currentChatIndex: number,
	index: number
): SxProps<Theme> => ({
	padding: { xs: 1, sm: 2 },
	cursor: 'pointer',
	color: currentChatIndex === index ? 'primary.contrastText' : 'text.primary',
	bgcolor: currentChatIndex === index ? 'primary.main' : 'background.paper',
	'&:hover': {
		bgcolor: currentChatIndex === index ? 'primary.dark' : 'action.hover'
	},
	transition: 'all 0.2s ease'
});

export const mobileDrawerStyle: SxProps<Theme> = {
	display: { xs: 'block', md: 'none' },
	'& .MuiDrawer-paper': {
		width: '85%',
		maxWidth: '300px'
	}
};

export const messageListMainStyle = (message: MessageType): SxProps<Theme> => ({
	display: 'flex',
	justifyContent: message.type === 'user' ? 'flex-start' : 'flex-end',
	padding: { xs: 0.5, sm: 1 }
});

export const messageListMainBoxStyle: SxProps<Theme> = {
	flex: 1,
	overflowY: 'auto',
	padding: { xs: 1, sm: 2 },
	display: 'flex',
	flexDirection: 'column',
	gap: { xs: 1, sm: 2 }
};

export const messageBoxStyle = (isUser: boolean): SxProps<Theme> => ({
	maxWidth: { xs: '85%', sm: '70%' },
	padding: { xs: 1, sm: 2 },
	borderRadius: 2,
	bgcolor: isUser ? 'primary.main' : 'background.paper',
	color: isUser ? 'primary.contrastText' : 'text.primary',
	boxShadow: 1
});

export const inputSectionStyle: SxProps<Theme> = {
	display: 'flex',
	gap: { xs: 1, sm: 2 },
	padding: { xs: 1, sm: 2 },
	borderTop: 1,
	borderColor: 'divider',
	bgcolor: 'background.paper',
	position: 'sticky',
	bottom: 0
};
