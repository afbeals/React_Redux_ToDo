// dependencies
import React from 'react';

export default class Single extends React.Component {
	constructor(props){
		super();
		console.log(props);
	}

	getCountryName(){
		var country = document.getElementById('getCountry');
		console.dir(country.value);
		this.props.itemsFetchSingleCity("/getSingleCities",country.value);
		//document.getElementById('getCountryBrn').addEventlistener('click',(e)=>{console.log(e)})
	}

	getLanguageName(){
		var language = document.getElementById('getLanguage');
		console.dir(language.value);
		this.props.itemsFetchCityLanguages("/getCityLanguage",language.value);
		//document.getElementById('getCountryBrn').addEventlistener('click',(e)=>{console.log(e)})
	}
	

	render(){
		return (	
			<div>
				<p>{this.props.setItems}</p>
				<button onClick={()=>this.props.itemsFetchCities("/getAllCities")}>click me for all cities</button>
				<button onClick={()=>this.props.itemsFetchCities("/getAllUsers")}>click me for 1 defualt cities</button>
				Single Component!
				<input type="text" placeholder="country" name="country" id="getCountry"/>
				<button id="getCountryBtn" onClick={()=>this.getCountryName()}> Get selected country</button>
				<input type="text" placeholder="language" name="language" id="getLanguage"/>
				<button id="getLanguageBtn" onClick={()=>this.getLanguageName()}> Get selected language</button>
			</div>
		)
	}
}