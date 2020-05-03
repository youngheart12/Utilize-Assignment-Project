import * as actionType from '../action/actionType';

const initialState={
    isLoading:true,
  userCollection:null,
  showCollection:null,
  createCollection:null,
  deletCollection:null,
  userProfile:null,
  updateCollection:null,
  error:null
}
export default function (state=initialState,action) {
    switch(action.type)
    {
        case actionType.FETCH_DATA_START:{
            return {
                ...state,
                isLoading:action.payload
            }
        } 
        case actionType.FETCH_DATA_END:{
            return{
                ...state,
                isLoading:action.payload
            }
        }  
        case actionType.GET_ALL_COLLECTION:{
            return{
                ...state,
                showCollection:action.payload
            }
        }
        case actionType.GET_COLLECTION_BY_USER:{
            return{
                ...state,
                userCollection:action.payload
            }
        }
        case actionType.CREATE_COLLECTION:{
            return{
                ...state,
                userCollection:[...state.userCollection,action.payload]
            }
        }
        case actionType.UPDATE_COLLECTION:{
            return{
                ...state,
                updateCollection:action.payload
            }
        }
        case actionType.DELETE_COLLECTION:{
           
            return{
                ...state,
             userCollection:state.userCollection.filter(item=>item._id!==action.payload._id)
            }
        }
        case actionType.UPDATE_USER_PROFILE:{
            return{
                ...state,
                userProfile:action.payload
            }
        }
        case actionType.CREATE_COLLECTION_FAIL:
        case actionType.UPDATE_COLLECTION_FAIL:
        case actionType.UPDATE_COLLECTION_FAIL:
        case actionType.GET_ALL_COLLECTION_FAIL:
        case actionType.GET_COLLECTION_BY_USER_FAIL:
        case actionType.DELETE_COLLECTION_FAIL:{
            return{
                ...state,
                error:action.payload
            }
        }
        default:
            return state    
    }
}