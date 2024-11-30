export interface MessageType {
	type: 'user' | 'assistant' | 'system';
	content: string;
}
