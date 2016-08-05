import 'whatwg-fetch';
import qs from 'querystring'
function checkStatus(response) {
    if (!response.ok) {   // (response.status < 200 || response.status > 300)
        const error = new Error(response.statusText,-1);
        error.response = response;
        throw error;
    }
    return response;
}

function parseJSON(response) {
    return response.json();
}

export default function newFetch(url,method,params){
    switch (method.toLowerCase()){
        case "post":
            return fetch(url,{
                method:method,
                credentials: 'include',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(params)
            }).then(checkStatus).then(parseJSON);
        case  "get":
            let newurl = url +"?"+qs.stringify(params);
            return fetch(
                newurl,{
                method:method,
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(checkStatus).then(parseJSON);
    }
}