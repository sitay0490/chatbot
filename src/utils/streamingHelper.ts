export const handleStream = async (
	response: string,
	onChunk: (char: string) => void
): Promise<void> => {
	for (const char of response) {
		await new Promise((resolve) => setTimeout(resolve, 50));
		onChunk(char);
	}
};
