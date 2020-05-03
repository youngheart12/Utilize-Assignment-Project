import React from 'react';
import {Jumbotron} from 'reactstrap';
import './cards.css'
const cards=(props)=>{
    return(
        <Jumbotron className={props.assignName}>
           <h1 style={{textAlign:"center"}}>{props.title}</h1>
        </Jumbotron>
    )
}
export default cards;