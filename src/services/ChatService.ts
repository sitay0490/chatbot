export abstract class ChatService {
	abstract getResponse(
		messages: { role: 'user' | 'assistant' | 'system'; content: string }[]
	): Promise<string>;
}
