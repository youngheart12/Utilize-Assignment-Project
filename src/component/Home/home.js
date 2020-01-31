import React,{Component} from 'react';
import {Jumbotron} from 'reactstrap'
import { GoogleLogin} from 'react-google-login';
class Home extends Component{
  
    state={
        isloggedIn:false
    }
    
    responseGoogle=(response)=>{
        if(response.error)
        {
            alert("login failed");
        }else{
            const name=response.profileObj.name;
            this.setState({loggedIn:true})
            sessionStorage.setItem("name",name);//for storing the name of the user
            this.setState({isloggedIn:true})
        }
    }
    
   


    render()
    {
       
        if(this.state.isloggedIn) //to check whether user is loggedin
        {
            this.props.history.push('/order');
        }
        return (
            <div>
                <div style={{ margin: "15% 15%" }}>
                    <Jumbotron style={{ backgroundColor: "mediumseagreen", textAlign: "center", color: "white", padding: "15px" }}>
                        <h2>Login to manage your ordered Items</h2>
                        <br></br>
                        <GoogleLogin
                            clientId="654276955678-4glq1d610977urifksvi8622ihnf5j4g.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Jumbotron>
                </div>
            </div>
    

    
        );
    }
}
export default Home;