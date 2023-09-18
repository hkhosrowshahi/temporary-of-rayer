import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navbar/Navigation';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Voting from './pages/Voting/Voting';
import AboutUs from './pages/AboutUs/AboutUs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Otp from './pages/Register/otp/otp';
import Election from './pages/Election/Election';
import PrivateRoute from './routes/PrivateRoutes';

function App() {
	return (
		<Fragment>
			<Navigation />
			<Routes>
				<Route path='/services' element={<Services />} />
				<Route path='/voting' element={<Voting />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/otp' element={<Otp />} />
				<Route path='/election' element={<Election />} />
				<Route path='/login' element={<Login />} />
				<PrivateRoute path='/'>
					<Route path='/home' element={<Home />} />
				</PrivateRoute>
			</Routes>
		</Fragment>
	);
}

export default App;
