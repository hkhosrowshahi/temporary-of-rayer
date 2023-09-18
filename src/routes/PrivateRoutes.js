// PrivateRoute.js
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	// Check if the user is authenticated (you can adjust this logic)
	const isAuthenticated = localStorage.getItem('token');

	return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
