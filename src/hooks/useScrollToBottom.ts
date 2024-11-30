import { useEffect } from 'react';
import { MessageType } from '../types';

const useScrollToBottom = (
	containerRef: React.RefObject<HTMLDivElement>,
	messages: MessageType[]
) => {
	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}, [messages, containerRef]);
};

export default useScrollToBottom;
