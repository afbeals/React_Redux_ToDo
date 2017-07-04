// dependencies
import React from 'react';

export default class Profile extends React.Component {
	constructor(props){
		super();
	}
	render(){
		return (
			<div>
				Profile Component!
				{console.log(this.props)}
			</div>
		)
	}
}

