function person(state = [],action){
	switch(action.type){
		case 'CHANGE_NAME':
			return [
				...state,
				name: action.name
			];
		default:
			return state;
	}
}

export default person;