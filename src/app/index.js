// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider }	 from 'react-redux';
import {Rouer, Route, IndexRoute,browserHistory } from 'react-router';

// Components
//import App from './components/App';
//import Profile from './components/Profile';
//import ProfileGrid from './components/ProfileGrid';
import Main from './components/Main';
// Css

// Store

render(
	<Main/>,
	document.getElementById('app')
);