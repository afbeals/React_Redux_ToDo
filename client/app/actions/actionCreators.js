import axios from 'axios';
import * as actions from './actions';
/**
  Action Creators

  These fire events which the reducer will handle
  We will later call these functions from inside our component

  Later these functions get bound to 'dispatch' fires the actual event
  Right now they just return an object

  It's a code convention to use all capitals and snake case for the event names
  We use const to store the name of the event so it is immutable

*/



// export function itemsFetchData(url) {
//     return (dispatch) => {
//         dispatch(itemsIsLoading(true));
//         axios.get(url)
//             .then((response) => {
//                 if (response.statusText != "OK") {
//                     throw Error(response.statusText);
//                 }
//                 //console.log(response.request.response)
//                 dispatch(itemsIsLoading(false));
//                 console.log(response);
//                 return response.request.response;
//             })
//             //.then((response) => response.json())
//             .then((items) => dispatch(itemsFetchDataSuccess(items)))
//             .catch(() => dispatch(itemsHasErrored(true)));
//             //.catch((err)=>console.log('err',err));
//     };
// }

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(actions.itemsIsLoading(true));
        axios.get(url)
            .then((response) => {  
                if (response.status != 200) {
                    throw Error(response.statusText);
                }
                //console.log(response.request.response)
                dispatch(actions.itemsIsLoading(false));
                return response.request.response;
            })
            //.then((response) => response.json())
            .then((items) => dispatch(actions.itemsFetchDataSuccess(items)))
            .catch(() => dispatch(actions.itemsHasErrored(true)));
    };
}

export function itemsFetchCities(url) {
    return (dispatch) => {
        dispatch(actions.itemsIsLoading(true));
        axios.get(url)
            .then((response) => {  
                if (response.status != 200) {
                    throw Error(response.statusText);
                }
                //console.log(response.request.response)
                dispatch(actions.itemsIsLoading(false));
                return response.request.response;
            })
            //.then((response) => response.json())
            .then((items) => dispatch(actions.itemsFetchDataSuccess(items)))
            .catch(() => dispatch(actions.itemsHasErrored(true)));
    };
}

export function itemsFetchSingleCity(url,params){
  return(dispatch) =>{
    dispatch(actions.itemsIsLoading(true));
    axios.get(url,{params:{city:params}})
          .then((response)=>{
            if(response.status != 200){
              throw Error(response.statusText);
            }
            dispatch(actions.itemsIsLoading(false));
            return response.request.response;
          })
          .then((items)=> dispatch(actions.itemsFetchDataSuccess(items)))
          .catch(()=> dispatch(actions.itemsHasErrored(true)));
  };
}

export function itemsFetchCityLanguages(url,params){
  console.log(params);
  return(dispatch) =>{
    dispatch(actions.itemsIsLoading(true));
    axios.get(url,{params:{language:params}})
          .then((response)=>{
            if(response.status != 200){
              throw Error(response.statusText);
            }
            dispatch(actions.itemsIsLoading(false));
            return response.request.response;
          })
          .then((items)=> dispatch(actions.itemsFetchDataSuccess(items)))
          .catch(()=> dispatch(actions.itemsHasErrored(true)));
  };
}