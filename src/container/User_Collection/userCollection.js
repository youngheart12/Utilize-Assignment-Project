import React, { Component } from 'react'
import UserCollectionOutline from './userCollectionOutline/userCollectionOutline';
import './userCollection.css';
import {connect} from 'react-redux';
import * as actionCreator from '../../action/Collection/collectionAction';
import { Row,Col,Spinner, Button } from 'reactstrap';


 class userCollection extends Component {
   
       
    componentDidMount()
    {
        this.props.ongetAllUserFunction();
       
    }
  
     checkHandler=()=>{
         console.log("Called");
     }
    
     launchHandler=(id)=>{
         console.log(id);
     }
     heartHandler=()=>{
         console.log("heart launches");
     }
    render() {
       const {isLoading,showCollection}=this.props.collection;
        return (
            <div>
            <div className="title-bar">
                <br></br>
                <h5><u>#User Collection</u></h5>
                </div>
                <div style={{margin:"15px"}}>
                    <Row>
                    {(isLoading)?<Spinner color="primary" type="grow"></Spinner>:showCollection.map((user,id)=>{
                        return <Col md="3"><UserCollectionOutline  key={id}isImg={user.isImg} aboutUser={user.about} firstLetter={user.name.slice(0,1)} id={user.id} launchHandler={()=>this.launchHandler(user.id)}></UserCollectionOutline></Col>
                    })}
                    </Row>
                
                </div>
                
              </div>
        )
    }
}

const mapStateToProps=(state)=>({
collection:state.collection
})

const mapDispatchToProps=dispatch=>{
    return{
        ongetAllUserFunction:()=>dispatch(actionCreator.getAllUserFunction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(userCollection);

