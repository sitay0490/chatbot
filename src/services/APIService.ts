import { AnthropicService } from './AnthropicService';
import { ChatService } from './ChatService';
import { OpenAIService } from './OpenAIService';

export type ServiceType = 'openai' | 'anthropic';
export const availableServices: ServiceType[] = ['openai', 'anthropic'];

export const APIService = {
	getClient: (service: ServiceType): ChatService => {
		switch (service) {
			case 'openai':
				return OpenAIService.getInstance(import.meta.env.VITE_OPENAI_API_KEY!);
			case 'anthropic':
				return AnthropicService.getInstance(import.meta.env.VITE_ANTHROPIC_API_KEY!);
			default:
				throw new Error('Unsupported AI service');
		}
	}
};
