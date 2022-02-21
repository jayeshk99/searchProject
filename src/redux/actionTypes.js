import { SEARCH_SUCCESS } from "./actions"

export const searchSuccess = (payload)=>{
    return {
        type: SEARCH_SUCCESS,
        payload
    }
}