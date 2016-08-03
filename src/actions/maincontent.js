import 'whatwg-fetch';

export const GETNEWSLIST_REQUEST = "GETNEWSLIST_REQUEST";
export const GETNEWSLIST_SUCCESS = "GETNEWSLIST_SUCCESS";
export const GETNEWSLIST_FAILURE = "GETNEWSLIST_FAILURE";

const getNewsList_success = (response)=>({
    type:GETNEWSLIST_SUCCESS,
    postList:response.data
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
            })
    }
}