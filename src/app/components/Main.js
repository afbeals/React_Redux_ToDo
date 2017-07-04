// dependencies
import React from 'react';

//components
import ProfileGrid from './ProfileGrid';
import Profile from './Profile';

class Text extends React.Component {
	render(){
		return (
			<div>
				Test 2
				<ProfileGrid />
				<Profile />
			</div>
		)
	}
}

export default Text;