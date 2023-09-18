// Function to set the token in localStorage
export const setToken = (token) => {
	localStorage.setItem('token', token);
};

// Function to get the token from localStorage
export const getToken = () => {
	return localStorage.getItem('token');
};

// Function to remove the token from localStorage
export const removeToken = () => {
	localStorage.removeItem('token');
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
	return !!getToken();
};
