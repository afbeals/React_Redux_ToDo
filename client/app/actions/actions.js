export function increaseNum(i) {
  return {
    type: 'INCREASE_NUM',
    index: i
  };
}
 


export function changeName(name) {
  return {
    type: 'CHANGE_NAME',
    name,
  };
}

export function itemsHasErrored(bool){
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function itemsIsLoading(bool){
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  }
}

export function itemsFetchDataSuccess(items){
  return{
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items
  }
}