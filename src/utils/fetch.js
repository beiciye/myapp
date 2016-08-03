import 'whatwg-fetch';

export default function newFetch(url,method,params){
    switch (method.toLowerCase()){
        case "post":
            return fetch(url,{
                method:method,
            })
    }
}