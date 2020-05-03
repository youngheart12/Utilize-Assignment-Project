import React, { Component } from 'react'
import './login.css';
import {connect} from 'react-redux';
import {loginUserFunction} from '../../action/Auth/actionSingup';
export class login extends Component {
    state={
        emailValidate:true,
        email:"",
        password:""
    }
    // handleSubmit=(e)=>{
    //  e.preventDefault();
    //  var form=document.querySelector("form");
    //  if(this.state.emailValidate && form[1].value!=="")
    //  {
    //      console.log(form[0].value,form[1].value);
         
    //  }else{
    //      alert("cannot be submiited");
    //  }
     
    // }
    onKeyUpHandler=(e)=>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
        {
           this.setState({
               emailValidate:true
           })
            
        }else{
            this.setState({
                emailValidate:false
            })
        }
        
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const userLoginDetails={
            email:this.state.email,
            password:this.state.password
        }
        this.props.onLogin(userLoginDetails);
    }
    render() { 
        if(this.props.authState.isAuthenticated)
        {
            this.props.history.push('/');
        }
        return (
            <div className="parentModel">
                <nav>
                    <a href="/signup">Signup <span>&#8594;</span></a>
                </nav>
                <div className="loginModel">
                   
                    <h1>Here you can login</h1>
                    <p style={{color:"#5D5F5C"}}>Lets's join us :)</p>
                    <form className="loginform"> 
                        
                        <label name="Email">Email</label>
                        <br></br>
                        <input type="email" name="email" onBlur={this.onKeyUpHandler} onChange={this.changeHandler}></input>
                       {this.state.emailValidate?null:<div><label style={{color:"red"}}>Mail address seems incorrect</label><br></br></div>} 
                        <label name="Password" >Password</label>
                        <br></br>
                        <input type="password"  name="password"onChange={this.changeHandler}></input>
                        <br></br><br></br>
                        <button className="loginbutton" onClick={this.handleSubmit}><p>Login</p></button>
                        <br></br>
                        <small style={{color:"#5D5F5C"}}><a href="#">Forgotten Password</a></small>
                        <small style={{float:"right",color:"#BE93C5"}}><a href="/">Home</a></small>
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
        onLogin:(userLoginDetails)=>dispatch(loginUserFunction(userLoginDetails))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(login)
