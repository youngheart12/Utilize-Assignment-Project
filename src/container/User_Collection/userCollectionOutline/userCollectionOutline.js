import React,{ useState } from 'react';
import {Button,Collapse,Card,CardBody,CardHeader,CardImg,Row,Col, CardFooter} from 'reactstrap';
import './userCollectionComponent.css';
const UserCollectionComponent=(props)=>{
   
    return (
       <div>
               <Card>
                {props.isImg ?
                   <CardHeader style={{padding:"10px",textAlign:"center",backgroundColor:"white"}}>
                            <img src={require('../../../image/dilip.jpg')} width="100px" height="100px" style={{borderRadius:"50%",position:"relative",top:"1.7rem"}}></img> 
                    </CardHeader>:
               
                    <CardHeader style={{padding:"10px",textAlign:"center",backgroundColor:"mediumseagreen",height:"120px",color:"white"}}>
                         <h1 className="display-3">{props.firstLetter}</h1>
                     </CardHeader>
                     }
             
             <CardBody>
                {props.aboutUser}
             </CardBody>

             <CardFooter style={{backgroundColor:"black",opacity:"0.9",color:"white",textAlign:"center"}}>
                 <i className="material-icons" style={{padding:"2px 10px"}} onClick={props.launchHandler} id="iconStyle">launch</i>
                 <i className="material-icons" style={{padding:"2px 10px"}} onClick={props.heartHandler} id="iconStyle">favorite</i>
                 <i className="material-icons" style={{padding:"2px 10px"}} id="iconStyle">stars</i>
             </CardFooter>
         </Card>
              
       </div>
    )
}
export default UserCollectionComponent;