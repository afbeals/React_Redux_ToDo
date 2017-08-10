// dependencies
import React from 'react';

export default class Single extends React.Component {
	constructor(props){
		super();
		console.log(props);
	}


	render(){
		return (	
			<div>
				<p>{this.props.setItems}</p>
				<button onClick={()=>this.props.itemsFetchData("/getAllUsers")}>click me </button>
				Single Component!
			</div>
		)
	}
}