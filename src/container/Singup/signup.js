import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import *as actionCreator from '../../action/Auth/actionSingup';
import './signup.css';

export class signup extends Component {
    state={
        name:"",
        password:"",
        email:"",
        about:""
    }
   changeHandler=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
   }
   handleSubmit=()=>{
       const userData={
           name:this.state.name,
           password:this.state.password,
           email:this.state.email,
           about:this.state.about
       }
       console.log("submiited");
       this.props.onSignup(userData);
   }
  
    render() {
        if(this.props.authState.isAuthenticated)
        {
            this.props.history.push('/');
        }
       
        return (
            <div className="parentModel">
                  <nav>
                  <a href="/login">Login <span>&#8594;</span></a>
              </nav>
                <div className="singupModel">
                    <h1>Welcome Onboard !</h1>
                    <p style={{color:"#5D5F5C"}}>A small intro we need:)</p>
                   <form className="signupform">
                       <label name="name">Name</label>
                       <input type="text" name="name" required onChange={this.changeHandler}></input>
                       <label name="email">Email</label>
                       <input type="email" name="email" required onChange={this.changeHandler}></input>
                       <label name="Password">Password</label>
                        <br></br>
                        <input type="password" name="password" required onChange={this.changeHandler}></input>
                        <label name="About">About you</label>
                        <br></br>
                        <textarea  name="about"placeholder="I am software developer at infosys and apart from being a tech lover i loves too read a lot of books" required onChange={this.changeHandler}></textarea>
                        <br></br><br></br>
                        
                        <Button color="success" onClick={this.handleSubmit} block>Signup</Button>
                        <br></br>
                        <small style={{color:"#5D5F5C"}}><a href="/">Home</a></small>
                      
                   </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
authState:state.auth
});
const mapDispatchToProps=dispatch=>{
    return{
        onSignup:(userData)=>dispatch(actionCreator.signupUserFunction(userData))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(signup)
 