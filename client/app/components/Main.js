// dependencies
import React from 'react';
import Profile from './Profile';

export default class Main extends React.Component {
	render(){
		return (
			<div>
				{/* We use cloneElement here so we can auto pass down props */}
        		{ React.cloneElement(this.props.children, this.props) }
				
			</div>
		)
	}
}