import React, { Component } from 'react'
import './individualOrder.css';
import {Button,Collapse,Table} from 'reactstrap';


export class childOrder extends Component {


    state={
        isDetails:false //used to hide and show detail
    }

    toggleHandler=()=>{ //used to hide and show detail
        this.setState({isDetails:!this.state.isDetails});
    }


    render() {
        return (
          <div className="Container">   
          {/* added a picture for UI purpose */}
            <div className="firstChild">
              <div style={{ border: "3px solid tomato", padding: "15px" }}>
                <img src="https://placeimg.com/60/60/any" ></img>
              </div>

              <div style={{ flexGrow: "3" }}>

                <h3>{this.props.product}</h3>
                <p style={{ display: "inline-block" }}>Order Id:</p> <small style={{ display: "inline" }}>{this.props.id}</small>

              </div>

              <div>
                <Button color="primary" onClick={this.toggleHandler}>{this.state.isDetails ? "Hide Details" : " Show Details"}</Button>
              </div>
            </div>


            {/* this section is open when show detail button is clicked */}

            <Collapse isOpen={this.state.isDetails}> 
              <div className="secondChild">
                <Table>
                  <thead>
                    <tr>
                      <th>Order Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Quantity</th>
                      <th>Action</th>
                      <th><Button color="link" onClick={this.props.edit}>Edit</Button></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{this.props.id}</th>
                      <td>{this.props.name}</td>
                      <td>{this.props.email}</td>
                      <td>{this.props.qt}</td>
                      <td><Button color="danger" onClick={this.props.delete} > Delete</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Collapse>


          </div>
        )
    }
}

export default childOrder
