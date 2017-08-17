// dependencies
import React from 'react';

export default class Single extends React.Component {
	constructor(props){
		super();
		console.log(props);
	}

	getCountryName(){
		let country = document.getElementById('getCountry');
		this.props.itemsFetchSingleCity("/getSingleCities",country.value);
		//document.getElementById('getCountryBrn').addEventlistener('click',(e)=>{console.log(e)})
	}

	getLanguageName(){
		let language = document.getElementById('getLanguage');
		this.props.itemsFetchCityLanguages("/getCityLanguage",language.value);
		//document.getElementById('getCountryBrn').addEventlistener('click',(e)=>{console.log(e)})
	}

	updateTodoItem(){
		let todoItem = document.getElementById('todoItem');
		this.props.addTodoItem(todoItem.value);
		console.log(this.props);
	}

	removeTodoItem(e){
		console.log(e);
		//this.props.removeTodoItem(todoItem.value);
	}
	

	render(){
		return (	
			<div>
				<ul>
				     {this.props.todos.map((todo, i)=>{
				       return <li key={i} onClick={this.removeTodoItem}>{todo}</li>
				     })}
				</ul>
				<button onClick={()=>this.props.itemsFetchCities("/getAllCities")}>click me for all cities</button>
				<button onClick={()=>this.props.itemsFetchCities("/getAllUsers")}>click me for 1 defualt cities</button>
				Single Component!
				<input type="text" placeholder="country" name="country" id="getCountry"/>
				<button id="getCountryBtn" onClick={()=>this.getCountryName()}> Get selected country</button>
				<input type="text" placeholder="language" name="language" id="getLanguage"/>
				<button id="getLanguageBtn" onClick={()=>this.getLanguageName()}> Get selected language</button>
				<input type="text" placeholder="todo item" name="todoItem" id="todoItem" />
				<button id="addTodoItem" onClick={()=>this.updateTodoItem()}> Add Todo Item </button>
			</div>
		)
	}
}