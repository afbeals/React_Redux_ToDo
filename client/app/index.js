// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider }	 from 'react-redux';
import {Rouer, Route, IndexRoute,browserHistory } from 'react-router';

// Components
import App from './components/App';

// Css

// Store

render(
	<App/>,
	document.getElementById('app')
);