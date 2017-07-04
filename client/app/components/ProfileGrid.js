// dependencies
import React from 'react';

export default class ProfileGrid extends React.Component { 
	render(){
		return (
			<div>
				ProfileGrid Component! {console.log(this.props)}
				<h1>{this.props.curNum}</h1>
				<button onClick={()=>this.props.increaseNum()}>increase numbah</button>
			</div>
		)
	}
}