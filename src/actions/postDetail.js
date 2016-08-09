
import newFetch from '../utils/fetch';

export const GETPOSTDETAIL_SUCCESS = "GETPOSTDETAIL_SUCCESS";
export const GETPOSTDETAIL_FAILURE = "GETPOSTDETAIL_FAILURE";

function postDetail_success(pyload){
    return {
        type:GETPOSTDETAIL_SUCCESS,
        postdetail:pyload.data
    }
}

export function postDetail(id){
    return dispatch => {
        return newFetch(`https://cnodejs.org/api/v1/topic/${id}`,'get')
        .then(json=>{
            dispatch(postDetail_success(json))
        })
        .catch(error=>{console.log(error)})
    }
}