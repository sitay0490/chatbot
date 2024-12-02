import Anthropic from '@anthropic-ai/sdk';
import { ChatService } from './ChatService';
import { MessageParam } from '@anthropic-ai/sdk/resources/messages.mjs';

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

	async getResponse(messages: { role: 'user' | 'assistant'; content: string }[]): Promise<string> {
		try {
			const formattedMessages: MessageParam[] = messages.map((msg) => ({
				role: msg.role as 'user' | 'assistant',
				content: msg.content
			}));

			const response = await this.anthropic.messages.create({
				model: 'claude-3-5-sonnet-20241022',
				max_tokens: 1024,
				messages: formattedMessages
			});

			const contentBlocks = response.content;
			const responseText = contentBlocks
				.map((block) => {
					if ('text' in block) {
						return block.text;
					} else if ('image' in block) {
						return '[Image Block]';
					} else if ('toolUse' in block) {
						return '[Tool Use Block]';
					}
					return '';
				})
				.join(' ');

			return responseText || 'No response from Anthropic';
		} catch (error) {
			return 'Error in Anthropic response';
		}
	}
}
