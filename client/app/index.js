// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider }	 from 'react-redux';
import {Rouer, Route, IndexRoute } from 'react-router';

// Components
import App from './components/App';
import Profile from './components/Profile';
import ProfileGrid from './components/ProfileGrid';

// Css

// Store
import store, {history} from './store';


render(
	<Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ProfileGrid} />
        <Route path="/view/:username" component={Profile}></Route>
      </Route>
    </Router>
  </Provider>,
	document.getElementById('app')
);