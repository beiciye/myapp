
import {
    GETNEWSLIST_SUCCESS,
} from  '../actions/maincontent'

export function maincontent(state={},action){
    switch (action.type){
        case GETNEWSLIST_SUCCESS:
            return Object.assign({},state,{
                postList:action.postList
            });
        default :
            return state;
    }
}