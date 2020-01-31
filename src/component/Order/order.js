import React, { Component } from 'react'
import './order.css';
import OrderList from '../OrderList/orderList';
import { GoogleLogout } from 'react-google-login';
class Order extends Component {

    state = {
       isLogout: false,
    }


logoutHandler=(response)=>{  //this handle logout 
 
    this.setState({isLogout:true})
    sessionStorage.clear("name");
}
    render() {
        const name = sessionStorage.getItem("name");

        if (this.state.isLogout) { //to redirect user back to home on logout
            this.props.history.push('/');
        }
        return (
            <div>
                <div style={{ backgroundColor: "mediumseagreen", color: "white", textAlign: "right" }}>
                    <ul>
                        <li>Order</li>
                        <li>Welcome {name} !</li>
                        <li><GoogleLogout
                            clientId="654276955678-4glq1d610977urifksvi8622ihnf5j4g.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={this.logoutHandler}
                        >
                        </GoogleLogout></li>
                    </ul>
                </div>

                {/* order list Component */}
                <OrderList></OrderList>

            </div>
        )
    }
}


export default Order;
