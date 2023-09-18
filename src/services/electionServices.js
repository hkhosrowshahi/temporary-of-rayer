import authAxios from '../auth/authAxios';
const URLS = {
	election: 'http://dermpath.ir:3300/api/v1/Election',
};

 export const CreateElection = async (electionData) => {
	let token = localStorage.getItem('token');
	try {
		const response = await authAxios.post(URLS.election, electionData, {
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		if (error.response) {
			return error.response.data;
		}
	}
};