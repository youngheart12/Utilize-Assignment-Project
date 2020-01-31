import { USER_DATA,ORDER_COUNT } from "./actionTypes"

export const getUserData=(body)=>dispatch=>{
   console.log(body);
    dispatch({
        type:USER_DATA,
       payload:body
    })
    
}
export const getTotalCount=(total)=>dispatch=>{
    console.log(total,"fired from here");
    dispatch({
        type:ORDER_COUNT,
        payload:total
    })
}