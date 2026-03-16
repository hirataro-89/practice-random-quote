import { useEffect, useState } from "react";

type Quote = {
	_id: string;
	content: string;
	author: string;
};

export const useFetchQuote = () => {
	const [quote, setQuote] = useState<Quote | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchQuote();
	}, []);

	const fetchQuote = async () => {
		setIsLoading(true);
		const response = await fetch("http://api.quotable.io/quotes/random");
		const data = await response.json();

		setQuote(data[0]);
		setIsLoading(false);
	};

	return { quote, isLoading, fetchQuote };
};
