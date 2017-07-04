function curNum(state = [],action){
	switch(action.type){
		case 'INCREASE_NUM':
			console.log('ahyyy',state,action);
			return [
				++state
			]
		default:
			return state;
	}
}

export default curNum;
