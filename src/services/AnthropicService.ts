import Anthropic from '@anthropic-ai/sdk';
import { ChatService } from './ChatService';

export class AnthropicService extends ChatService {
	private static instance: AnthropicService;
	private anthropic: Anthropic;

	private constructor(apiKey: string) {
		super();
		this.anthropic = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
	}

	static getInstance(apiKey: string): AnthropicService {
		if (!AnthropicService.instance) {
			AnthropicService.instance = new AnthropicService(apiKey);
		}
		return AnthropicService.instance;
	}

	async getResponse(messages: { role: string; content: string }[]): Promise<string> {
		try {
			// Ensure the prompt starts with the required format for Anthropic API
			let formattedMessages = '\n\nHuman:';

			// Iterate over messages to construct the prompt
			for (const msg of messages) {
				if (msg.role === 'user') {
					formattedMessages += `\n\nHuman: ${msg.content}`;
				} else if (msg.role === 'assistant') {
					formattedMessages += `\n\nAssistant: ${msg.content}`;
				}
			}

			// Add the required ending prompt for the assistant to respond
			formattedMessages += `\n\nAssistant:`;

			const response = await this.anthropic.completions.create({
				model: 'claude-2',
				prompt: formattedMessages,
				max_tokens_to_sample: 300,
				temperature: 0.7
			});

			return response.completion || 'No response from Anthropic';
		} catch (error) {
			return 'Error in Anthropic response';
		}
	}
}
