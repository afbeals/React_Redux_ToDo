// dependencies
import React from 'react';
import Profile from './Profile';

export default class Main extends React.Component {
	constructor(props){
		super();
		this.state = {
			yellAt : "Karina!"
		};
	}

	yellAtWho(person){
		console.log(person)
		this.setState({
			yellAt : person
		})
	}



	render(){
		return (
			<div>
				Main 2
				<Profile consoleLog={this.consoleLog} yellAtWho={(e)=>this.yellAtWho(e)}/>
				<h3><b>I'm yelling at {this.state.yellAt}!</b></h3>
				{/*this.props.children*/}
				
			</div>
		)
	}
}