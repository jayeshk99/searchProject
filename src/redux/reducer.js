import { SEARCH_SUCCESS } from "./actions";

const init = {
    data: []
}
export const reducer = (store = init, {type, payload})=>{
    switch(type){
        case SEARCH_SUCCESS:
            return {...store, data: payload};
        default:
            return {...store}
    }
}

