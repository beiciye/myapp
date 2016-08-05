import newFetch from '../utils/fetch';
export const GETNEWSLIST_SUCCESS = "GETNEWSLIST_SUCCESS";
export const GETNEWSLIST_FAILURE = "GETNEWSLIST_FAILURE";

export const CHECKOUTTAB_SUCCESS = "CHECKOUTTAB_SUCCESS";
export const CHECKOUTTAB_FAILURE = "CHECKOUTTAB_FAILURE";

const getNewsList_success = (response)=>({
    type:GETNEWSLIST_SUCCESS,
    postList:response.data
});

const getNewsList_failure = (error) =>({
    type:GETNEWSLIST_FAILURE,
    error
});

export function getNewsList(){
    return dispatch => {
        return fetch('https://cnodejs.org/api/v1/topics',{
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response=>{
            return response.json();
        }).then(json=>{
                dispatch(getNewsList_success(json))
            }).catch(error=>dispatch())
    }
}


const checkout_success = (pyload,selectedTab)=>({
    type:CHECKOUTTAB_SUCCESS,
    selectedTab,
    postList:pyload.data,
});

const checkout_failure = (error)=>({
    type:CHECKOUTTAB_FAILURE,
    error
});
export function checkoutTab(url){
    return dispatch=>{
        return newFetch("https://cnodejs.org/api/v1/topics",'get',{
            tab:url
        }).then(json=>{
            dispatch(checkout_success(json,url))
        })
        .catch(error=>dispatch(checkout_failure(error)))
    }
}