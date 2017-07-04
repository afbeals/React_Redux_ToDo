// dependencies
import React from 'react';

export default class Profile extends React.Component {
	constructor(props){
		super();
		this.state = {
			curNum : 1,
			arb : 0
		};
	}

	onIncreaseNumber(){
		this.setState(
			{curNum: ++this.state.curNum}
		);
		console.log(this.state);
	}

	onYellAtSomeone(){
		let curPerson = document.getElementById('personsName').value;
		this.props.yellAtWho(curPerson);
	}

	render(){
		return (
			<div>
				Profile Component!
				<label htmlFor="personsName">
					Who should we yell at?
					<input type="text" name="personsName" id="personsName" />
				</label>
				<button onClick={()=>this.onYellAtSomeone()}>Tell em' </button>
				<button onClick={()=>this.onIncreaseNumber()}>Increase Number {this.state.curNum}</button>
			</div>
		)
	}
}

