// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider }	 from 'react-redux';
import {Router, Route, IndexRoute } from 'react-router';

// Components
import App from './components/App';
import Single from './components/Single';
import ProfileGrid from './components/ProfileGrid';
import Profile from './components/Profile';

// Css

// Store
import store, {history} from './store';


render(
	<Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ProfileGrid} />
        <Route path="/view/:username" component={Single} />
        <Route path="/test" component={Profile} />
      </Route>
    </Router>
  </Provider>,
	document.getElementById('app')
);