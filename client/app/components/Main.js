// dependencies
import React from 'react';
import Profile from './Profile';

export default class Main extends React.Component {
	constructor(props){
		super();
		console.log(props)
	}

	consoleLog(){
		console.log("yuss");
	}

	render(){
		return (
			<div>
				Main 2
				<Profile consoleLog={this.consoleLog} />
				{/*this.props.children*/}
				
			</div>
		)
	}
}