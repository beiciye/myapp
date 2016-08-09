import {
    GETPOSTDETAIL_SUCCESS   ,
    GETPOSTDETAIL_FAILURE   ,
} from '../actions/postDetail'


export function postdetail(state={
    postdetail:{}
},action){
    switch (action.type){
        case GETPOSTDETAIL_SUCCESS:
            return Object.assign({},state, {
                postdetail: action.postdetail
            });
        default:
            return state
    }
}