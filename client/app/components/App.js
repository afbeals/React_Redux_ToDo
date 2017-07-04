//Dependencies
import React from 'react';

import ProfileGrid from './ProfileGrid';
import Profile from './Profile';
import Main from './Main';

export default class App extends React.Component {
	constructor(){
		super(); 
		this.state={
			job:"Support Agen"
		}
	}

	render(){
		var user = {
			name:"Allan",
			age:27
		}
		return (
			<div>
				App Component!
				<Main user={user}>
					<ProfileGrid/>
					<Profile />
				</Main>
			</div>
		)
	}
}