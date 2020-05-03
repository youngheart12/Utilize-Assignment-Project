import React from 'react';
import {Toast, ToastBody, ToastHeader,Badge} from 'reactstrap'
const featuredBooksComponent=(props)=>{
   
    return (
        <Toast style={{boxShadow:" 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"}}>
          <ToastHeader style={{backgroundColor:"#FBFBFB",color:"#000022"}}>
            {props.header}
            </ToastHeader> 
            <ToastBody className="toastbody">
             
                <h6>Author:{props.author}</h6>
                <h6>Published Year: 1976</h6>
                <h6>Tags: <span style={{color:"#3D348B"}}>Action|Adventure|Travel</span></h6>
               
               
                </ToastBody>
                <ToastHeader >
                <a href="#" style={{textDecoration:"none",color:"inherit"}}><i className="material-icons" style={{fontSize:"1.5rem",paddingRight:"10px"}} id="download">get_app</i>
                </a>
                <i className="material-icons" style={{fontSize:"1.5rem"}} id="heart">favorite</i>
                <span style={{float:"right"}}>
                500
               
                </span>
                
                </ToastHeader>
        </Toast>
    );
}
export default featuredBooksComponent;