import React, { Component } from 'react'
import './authentication.css';
import { Dropdown } from 'reactstrap';
import {connect} from 'react-redux';
export class authentication extends Component {
        state={
            user:null,
            isAuthenticated:false
        }
        componentDidMount()
        {
            if(sessionStorage.getItem("state"))
            {
                const data=JSON.parse(sessionStorage.getItem("state"));
                this.setState({user:data});
                this.setState({isAuthenticated:true})
            }
        }
       
        logOutHandler=()=>{
            
            sessionStorage.clear();
            this.setState({isAuthenticated:false})
        }
    render() {
      
        return (
            <div>
                {this.state.isAuthenticated?
                <nav>
                <a href="#"><h5>#StarterPack</h5></a>
                <a href="/" className="active">Home</a>
                <a href="#">Contact</a>
                <a href="/dashboard">Dashboard</a>
                <a onClick={this.logOutHandler}>Logout</a>
                <a href="#">{this.state.user.user.name}</a>
                </nav>
                :
                 <nav>
                     <a href="#"><h5>#StarterPack</h5></a>
                     <a href="/" className="active">Home</a>
                     <a href="#">Contact</a>
                     <a href="/login">Login</a>
                     <a href="/signup">SignUp</a>
                </nav>
    }
            </div>
        )
    }
}
const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,null) (authentication)
