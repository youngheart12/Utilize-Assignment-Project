import * as actionType from '../actionType';
export const setLoading=()=>{
    return{
        type:actionType.FETCH_DATA_START,
        payload:true
    }
}

export const stopLoading=()=>{
    return{
        type:actionType.FETCH_DATA_END,
        payload:false
    }
}

