import { useEffect, useState } from 'react';
import { getItemsList } from '../services/items';

export const useItemsList = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getItemsList();
				setItems(data.results);
				setLoading(false);
			} catch (error) {
				console.error('Error al obtener los datos:', error);
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return {
		items,
		loading
	};
};
