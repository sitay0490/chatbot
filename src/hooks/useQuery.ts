import { useState, useEffect } from 'react';

// Define the types for data and error
interface QueryResponse<T> {
	data: T | null;
	error: string | null;
	isLoading: boolean;
}

// The generic type `T` is for the data returned from the API
function useQuery<T>(url: string): QueryResponse<T> {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		// Reset state on new request
		setData(null);
		setError(null);
		setIsLoading(true);

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const result = await response.json();
				setData(result);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error');
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, error, isLoading };
}

export default useQuery;
