function todos(state = [], action){
	switch (action.type){
		case 'ADD_TODO_ITEM':
			return [...state,action.item];
		case 'REMOVE_TODO_ITEM':
			console.log(action.item);
			return [
		        ...state.slice(0, action.i),
		        ...state.slice(action.i + 1)
		      ];
		default:
			return state;
	}
}

export default todos;