import axios from 'axios';
/**
  Action Creators

  These fire events which the reducer will handle
  We will later call these functions from inside our component

  Later these functions get bound to 'dispatch' fires the actual event
  Right now they just return an object

  It's a code convention to use all capitals and snake case for the event names
  We use const to store the name of the event so it is immutable

*/

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

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        axios.get(url)
            .then((response) => {  
                if (response.status != 200) {
                    throw Error(response.statusText);
                }
                //console.log(response.request.response)
                dispatch(itemsIsLoading(false));
                return response.request.response;
            })
            //.then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}