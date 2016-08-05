import {
    GETNEWSLIST_SUCCESS,
    CHECKOUTTAB_SUCCESS,
    CHECKOUTTAB_FAILURE,
} from  '../actions/maincontent'

export function maincontent(state={
    postList:[],
    selectedTab:"all",
},action){
    switch (action.type){
        case GETNEWSLIST_SUCCESS:
            return Object.assign({},state,{
                postList:action.postList
            });
        case CHECKOUTTAB_SUCCESS:
            return Object.assign({},state,{
                postList:action.postList,
                selectedTab:action.selectedTab
            });
        default :
            return state;
    }
}

