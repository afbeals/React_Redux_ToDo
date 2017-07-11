// dependencies
import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {
	constructor(props){
		super();
	}

	getAllUsers(){
		const request = axios.get('/getAllUsers')
		.then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
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

