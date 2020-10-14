import api from '../api';

export const gettodo = async () => {
	const res = await api.get('/get');

	return res.data;
};
