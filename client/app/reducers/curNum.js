function curNum(state = [],action){
	switch(action.type){
		case 'INCREASE_NUM':
			return [
				...state,
				curNum= ++action.curNum
			]
		default:
			return state;
	}
}

export default curNum;
