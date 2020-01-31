import React, { Component } from 'react'
import {Row,Col,Button,Collapse,Table, Jumbotron, Badge, Alert,Card,CardBody,CardText,CardTitle,Form,FormGroup,Label,Input,Modal,ModalBody,ModalHeader} from 'reactstrap';
import '../Order/order.css';
import Data from '../DummyData.json'
import ChildOrder from '../Order/individualOrder/individualOrder';
class OrderList extends Component {

    state={
        name:"",      //used for storing the name when new order is placed
        email:" ",    //used for storing the email when new order is placed
        product:"",   //used for storing the product when new order is placed
        quantity:"",   //used for storing the quantity when new order is placed
        orderData:Data, //original data from json file 
        duplicateData:[], //to store
       istrime:false,
       newData:[],
       page:1,
       totalPage:null,
       row:5,
       maxLeft:1,
       maxRight:20,
       window:20,
       isModal:false,
       isAddopen:false,
       editname:"",
       editemail:"",
       editproduct:"",
       editquantity:" ",
       editid:" "
    }
   
    componentWillMount(){
        this.pageination(); //to load initially 
     
    }
    componentDidMount(){
        this.pageButton(); //to update when user click on any page number
                            //  and show order in that page
    }

   
    pageination=()=>{ // this function is to trim the data which is to be shown
                    
       const page=this.state.page
       
        const row=this.state.row;
        var trimStart=(page-1)*row;
        var trimEnd=trimStart+row;
        var trimData=this.state.orderData.slice(trimStart,trimEnd);
       
        const len=this.state.orderData.length;
        var pages=Math.ceil(len/row);
       
        this.setState({duplicateData:trimData})
        this.setState({page:pages});
   
       
    }
   
    shootHandler=(e)=>{  //this update the page  in the state with the currentpage  value
                            //where user has clicked
    this.setState({page:e.target.value});
    
        setTimeout(()=>{
            this.pageination()
        },1)
   
    }

    pageButton=()=>{ //this function is for dynamically creating button
        
        const pages=this.state.page;
       
        var wrapper=document.getElementById("pagination-wrapper");
        wrapper.innerHTML=" ";

        var maxLeft=this.state.maxLeft
        var maxRight=this.state.maxRight
        console.log(pages,"pages value from oagebut")
        for(var i=maxLeft;i<=maxRight;i++)
        {
           wrapper.innerHTML+=`<button value=${i} ">${i}</button>`
        }
      
    }


    backHandler=()=>{ //this function is for previous button handler 
                    //get disable when leftIndex is 0
        let backDistance=(this.state.maxRight-this.state.window);
        let initialDistance=this.state.maxLeft-this.state.window
       if(initialDistance<1)
       {
           initialDistance=1;
       }
       this.setState({maxLeft:initialDistance});
       this.setState({maxRight:backDistance});
       setTimeout(()=>{
           this.pageButton();
       },2)
    }


    nextHandler=()=>{ //this function is for forward button
         var nextDistance=(this.state.maxRight+this.state.window);
        this.setState({maxLeft:this.state.maxRight});
     this.setState({maxRight:nextDistance});
       setTimeout(()=>{
           this.pageButton();
       },200);
    }


    deleteHandler=(data)=>{ //this function is used to delete the data from 
                            //duplicate and original Orderdata
      
      var newdata=this.state.duplicateData.filter(function(datas){
          return datas.id !==data.id;
      })
      var deleteoriginal=this.state.orderData.filter(function(datas){
          return datas.id !==data.id;
      })
      this.setState({duplicateData:newdata});
      this.setState({orderData:deleteoriginal});
      

    }
    toggle=()=>{ //this toggle is for placing order
        this.setState({
            isAddopen:!this.state.isAddopen
        })
    }


    handleChange=(e)=>{ //this function keep track the changes in the input field
        this.setState({[e.target.name]:e.target.value}) ; 
    }


    submitDetail=(e)=>{ //this fucntion is used to submit the details of order
                        //that is being placed by the user
        e.preventDefault();
        const orderData=this.state.orderData;
        const {name,email,product,quantity}=this.state;
        const newData={
            customer_name:name,
            customer_email:email,
            product:product,
            quantity:quantity
        };
        orderData.push(newData);
        this.setState({orderData});
       this.setState({isAddopen:!this.state.isAddopen});
     
  
    }


    toggleHandler=()=>{ //this toggle handler is for modal that
                        //when user want to edit order
        this.setState({isModal:!this.state.isModal})
    }


    editHandler=(data)=>{ //this function is to edit the order detail
                        // and to keep track of edit in order detail
     
        this.setState({
            editname:data.customer_name,
            editemail:data.customer_email,
            editid:data.id,
            editproduct:data.product,
            editquantity:data.quantity

        })
       this.setState({isModal:!this.state.Modal});
    }


    updateHandler=()=>{ //this function update the edited value and store it locally
                        //with session storage
        const {editname,editemail,editproduct,editquantity}=this.state;
        var user={
            editname,
            editemail,editproduct,editquantity
        }
     
        sessionStorage.setItem("update",JSON.stringify(user))
        this.toggleHandler();

    }

    render() {
    
      
        return(
            <div>

{/* this part is the display part that conatins an image and current
it also shows the total number of order and get updated too in 
case of deletion or updation in order data */}
                <div>
                    <Jumbotron style={{ backgroundColor: "#FDF4E4" }}>
                        <div style={{ display: "flex" }}>

                            <div>
                                <img src={require("../image/shopping.jpg")}></img>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <Alert>We help you in delivering a better product</Alert>
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>Till now we have <b>{this.state.orderData.length}</b> orders a natural lead-in to additional content.</CardText>
                                    <Button onClick={this.toggle}>{this.state.isAddopen ? "Fill order details" : "Make an order"}</Button>
                                    {this.state.isAddopen ? <div>
                                        <br></br>
                                        <Form onSubmit={this.submitDetail}>
                                            <FormGroup>
                                                <Input type="text" name="name" id="exampleEmail" placeholder="Enter your name" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="email" name="email" placeholder="enter your mail" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="product" placeholder="enter your product name you want to order" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="number" name="quantity" placeholder="Enter the quantity" onChange={this.handleChange} />
                                            </FormGroup>
                                        </Form>
                                        <Button color="success" block onClick={this.submitDetail}>Place Order</Button>

                                    </div> : null}
                                </Card>
                            </div>
                        </div>
                    </Jumbotron>
                </div>

                {/* display part end here */}

                {/* this part contains modal that get open when user want to edit order details */}

                <div>
                    <Modal isOpen={this.state.isModal} >
                        <ModalHeader toggle={this.toggleHandler}>Edit Order Detail</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.submitDetail}>
                                <FormGroup>

                                    <Input type="text" name="editname" id="exampleEmail" value={this.state.editname} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="email" name="editemail" value={this.state.editemail} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="editproduct" value={this.state.editproduct} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="number" name="editquantity" value={this.state.editquantity} placeholder="Enter the quantity" onChange={this.handleChange} />
                                </FormGroup>
                            </Form>
                            <Button color="success" onClick={this.updateHandler}>Update</Button>
                        </ModalBody>

                    </Modal>
                </div>

                {/* modal part ends here */}


                {/* this part maps the orderDATA list by using individualOrder component */}

                {this.state.duplicateData.map((data, index) => {
                    return <ChildOrder
                        key={index}
                        product={data.product}
                        id={data.id}
                        name={data.customer_name}
                        email={data.customer_email}
                        delete={this.deleteHandler.bind(this, data)}
                        edit={this.editHandler.bind(this, data)}
                        id={data.id}
                        qt={data.quantity}></ChildOrder>
                })}

                {/* mapping parts end here */}

                {/* this part conatins dynamically created button with back and forward button */}


                <div style={{ display: "flex", margin: "3% 20%" }}>
                    <div>
                        <button onClick={this.backHandler} className disabled={this.state.maxLeft == 1 ? true : false}>Back</button>
                    </div>
                    <div id="pagination-wrapper" onClick={this.shootHandler}>
                    </div>
                    <div>
                        <button onClick={this.nextHandler} className>Forward</button>
                    </div>
                </div>

                {/* button part ends here */}
            </div>
        )
        
    }
}


export default OrderList;

