import OpenAI from 'openai';
import { ChatService } from './ChatService';

export class OpenAIService extends ChatService {
	private static instance: OpenAIService;
	private openai: OpenAI;

	private constructor(apiKey: string) {
		super();
		this.openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
	}

	static getInstance(apiKey: string): OpenAIService {
		if (!OpenAIService.instance) {
			OpenAIService.instance = new OpenAIService(apiKey);
		}
		return OpenAIService.instance;
	}

	async getResponse(
		messages: { role: 'user' | 'assistant' | 'system'; content: string }[]
	): Promise<string> {
		try {
			const formattedMessages = messages.map((msg) => ({
				role: msg.role as 'user' | 'assistant' | 'system',
				content: msg.content
			}));

			const completion = await this.openai.chat.completions.create({
				model: 'gpt-4',
				messages: formattedMessages
			});

			return completion.choices[0]?.message?.content || 'No response from OpenAI';
		} catch (error) {
			return 'Error in OpenAI response';
		}
	}
}
