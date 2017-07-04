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
	componentWillMount() {
        console.log("Component will mount");
    }
	render(){
		return (
			<div>
				Profile Component!
				<button onClick={()=>this.props.consoleLog()}>Console Log </button>
				<button onClick={()=>this.onIncreaseNumber()}>Increase Number {this.state.curNum}</button>
			</div>
		)
	}
}

