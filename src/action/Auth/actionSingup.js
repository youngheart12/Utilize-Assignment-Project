
import * as actionTypes from '../actionType'; 
import {setLoading,stopLoading} from '../loading/loading';
import axios from 'axios';

export const signupUserFunction=(user)=>{
return function(dispatch){
    dispatch(setLoading);
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    };
    const body=user;
    axios.post('/api/auth/signup',body,config).then((res)=>{
        dispatch({
            type:actionTypes.REGISTER_SUCCESS,
            payload:res.data
        })
    }).catch((err)=>{
        dispatch({
            type:actionTypes.REGISTER_FAIL,
            value:err.response.data
        })
    })
    dispatch(stopLoading);
}
}

//@@login

export const loginUserFunction=(user)=>{
    console.log("reached here");
    return function(dispatch){
        dispatch(setLoading);
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        };
        const body=user;
        axios.post('/api/auth/login',body,config).then((res)=>{
            dispatch({
                type:actionTypes.LOGIN_SUCCESS,
                payload:res.data
            })
        }).catch((err)=>{
           
            dispatch({
                type:actionTypes.LOGIN_FAIL,
                payload:err.response.data
            })
        })
        dispatch(stopLoading);
    }
       
    }
