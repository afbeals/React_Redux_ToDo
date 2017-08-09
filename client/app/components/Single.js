// dependencies
import React from 'react';

export default class Single extends React.Component {
	constructor(props){
		super();
		console.log(props);
	}
	componentDidMount() {
        this.props.itemsFetchData("http://pokeapi.co/api/v2/pokemon/1/");
    }

	render(){
		return (	
			<div>
				<p>{console.log(this.props.setItems,this.props)}</p>
				Single Component!
			</div>
		)
	}
}