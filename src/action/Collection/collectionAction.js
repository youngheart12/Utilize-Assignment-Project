import * as actionType from '../actionType';
import axios from 'axios';
import {setLoading ,stopLoading} from '../loading/loading';
import { getUserId } from '../StoredStore/presistStore';


//@getallusercollectioninhomepage

export const getAllUserFunction=()=>{
    return function(dispatch){

        dispatch({
            type:actionType.FETCH_DATA_START,
            payload:true
        })

        axios.get('api/collection/showCollection').then( ( res ) => {
            dispatch({
                type:actionType.GET_ALL_COLLECTION,
                payload:res.data
            })
            dispatch({
                type:actionType.FETCH_DATA_END,
                payload:false
            })
        }).catch((err)=>{
            console.log(err)
            dispatch({
                type:actionType.GET_ALL_COLLECTION_FAIL,
                payload:err
            })
        })
        
        
    }
}


//@getuserowncollection

export const getUserCollectionFunction=(userId)=>{

    return function(dispatch)
    {
        dispatch({
            type:actionType.FETCH_DATA_START,
            payload:true
        });
      
        axios.get(`api/collection/owner/${userId}`).then((res)=>{
            dispatch({
                type:actionType.GET_COLLECTION_BY_USER,
                payload:res.data
            })
            dispatch({
                type:actionType.FETCH_DATA_END,
                payload:false
            });
        }).catch((err)=>{
            dispatch({
                type:actionType.GET_COLLECTION_BY_USER_FAIL,
                payload:err
            })
        })
        dispatch(stopLoading);
    }
}

//@postownercollectionwithuserid

export const putUserCollectionFunction=(postData)=>{
    return function(dispatch)
    {
        
    console.log("Reached here with data of ",postData,getUserId());
    const config={
        headers:{
            'Content-Type':'application/json'
        }
       
    };
    const userId=getUserId();
    axios.post(`api/collection/owner/${userId}`,postData,config).then((res)=>{
        dispatch({
            type:actionType.CREATE_COLLECTION,
            payload:res.data
        })
    }).catch((err)=>{
        dispatch({
            type:actionType.CREATE_COLLECTION_FAIL,
            payload:err
        })
    })
    }
}

//@updateownercollectionwithcollectionid

export const updateUserCollection=(updateData)=>{
    return function(dispatch)
    {
       
        const {collectionId,...rest}=updateData
        const config={
            headers:{
                'Content-Type':'application/json'
            }
           
        };
        axios.patch(`api/collection/owner/update/${collectionId}`,rest,config).then((res)=>{
            dispatch({
                type:actionType.UPDATE_COLLECTION,
                payload:res.data
            })
            
        }).catch((err)=>{
            dispatch({
                type:actionType.UPDATE_COLLECTION_FAIL,
                payload:err
            })
        })
        
    }
}

//@updateuserprofilewithuserid

export const updateUserProfile=()=>{
    return function(dispatch)
    {
        dispatch(setLoading);
        let userId;
        axios.post(`owner/updateuser/${userId}`).then((res)=>{
            dispatch({
                type:actionType.UPDATE_USER_PROFILE,
                payload:res.data
            })
        }).catch((err)=>{
            dispatch({
                type:actionType.UPDATE_USER_PROFILE_FAIL,
                payload:err.data
            })
        })
    }
}
export const deleteOneCollectionFunction=(collectionId)=>{
        return function(dispatch)
        {
            axios.delete(`api/collection/owner/update/${collectionId}`).then((res)=>{
                dispatch({
                    type:actionType.DELETE_COLLECTION,
                    payload:res.data
                })
            }).catch((err)=>{
                dispatch({
                    type:actionType.DELETE_COLLECTION_FAIL,
                    payload:err
                })
            })
        }
}