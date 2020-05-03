import * as actionType from '../action/actionType';

const initialState={
    isLoading:true,
    userProfileData:null,
    isAuthenticated:false

}

export default function (state=initialState,action) {
    switch(action.type)
    {
        case actionType.FETCH_DATA_START:
            return{
                ...state,
                isLoading:action.payload
            }
        case actionType.FETCH_DATA_END:{
        
            return{
                ...state,
                isLoading:action.payload
            }
        }
        case actionType.REGISTER_SUCCESS:
        case actionType.LOGIN_SUCCESS:{
            sessionStorage.setItem("state",JSON.stringify(action.payload))
            
            return{
               ...state,
                userProfileData:action.payload,
                isAuthenticated:true
            }
        }
        case actionType.REGISTER_FAIL:
        case actionType.LOGIN_FAIL:
        sessionStorage.clear();    
        {
            return {
                ...state,
                error:action.payload,
                isAuthenticated:false,
                userProfileData:null
            }
        }
        default:
            return state    
    }
}