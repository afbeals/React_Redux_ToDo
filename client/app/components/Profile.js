// dependencies
import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {
	constructor(props){
		super();
	}

	render(){
		return (
			<div>
				Profile Component!
				{}
				{getAllUsers()}
				<button onClick={() => this.getAllUsers()} className="btn btn-primary">Change Header Link</button>
			</div>
		)
	}
}

