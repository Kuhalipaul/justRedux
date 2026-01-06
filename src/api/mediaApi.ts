import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;

export function fetchPhotos(query, page = 1, per_page = 20) {
	const res = axios.get('https://api.unsplash.com/search/photos', {
		params: { query, page, per_page },
		headers: { Authorization },
	});
	console.log(res);
}
