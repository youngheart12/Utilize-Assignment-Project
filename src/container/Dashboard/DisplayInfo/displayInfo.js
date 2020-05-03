import React, { Component } from 'react'
import {Jumbotron} from 'reactstrap';
import '../dashboard.css';
export class displayInfo extends Component {
    state={
        shownavbar:true,
        createNewList:false,
        countIncrease:1,
        profile:false
    }
    render() {
        return (
            <Jumbotron className="dashboardChildWrapper">
            {this.state.countIncrease>0?
            <div className="dashboardChildInsideWrapper">
            <h2>You  have {this.state.countIncrease} collection  <span role="img">&#128525;</span></h2>
            <p id="openCreatorContent" onClick={this.showHideHandler} >Create More Collection here <span>&#128071;</span></p>   
           <small style={{color:"grey"}}> Share your book collection with your friends</small>
            {/* share buttons */}
            
            <div id="share-buttons"> 
             <a href="https://www.facebook.com/sharer.php?u=https://frinmash.blogspot.com" target="_blank">
                 <img src="https://4.bp.blogspot.com/-raFYZvIFUV0/UwNI2ek6i3I/AAAAAAAAGSA/zs-kwq0q58E/s1600/facebook.png" alt="Facebook" />
                 </a> 
                 {/* <!-- Twitter -->  */}
                 <a href="https://twitter.com/share?url=https://frinmash.blogspot.com&text=Simple Share Buttons" target="_blank">
                     <img src="https://4.bp.blogspot.com/--ISQEurz3aE/UwNI4hDaQMI/AAAAAAAAGS4/ZAgmPiM9Xpk/s1600/twitter.png" alt="Twitter" /></a>
                     
                      
                     
                          
                           
                            {/* <!-- LinkedIn -->  */}
                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://frinmash.blogspot.com" target="_blank"><img src="https://2.bp.blogspot.com/-3_cATk7Wlho/UwNI3eoTTLI/AAAAAAAAGSQ/Y8cpq6S-SeQ/s1600/linkedin.png" alt="LinkedIn" /></a> 
                           

                            {/* <!-- Email --> */}
                             <a href="mailto:?Subject=FrinMash&Body=I%20saw%20this%20and%20thought%20of%20you!%20 https://frinmash.blogspot.com"><img src="https://4.bp.blogspot.com/-njgKtNLrPqI/UwNI2o-9WfI/AAAAAAAAGR4/f8da1gBgyLs/s1600/email.png" alt="Email" /></a>
                    {/* whatsapp */}
                    <a href="whatsapp://send?text=https://codepen.io/Itxshakiil/pen/RVYGRW"><img src={require('../../../image/whatsapp.svg')} alt="Email" /></a>
                              </div>

 
            
            {/* share buttons */}
            </div>:
            <div className="dashboardChildInsideWrapper">
            <h2>You dont have any collection yet <span role="img">&#128546;</span></h2> 
            <p id="openCreatorContent" onClick={this.showHideHandler} >Create your own Collection here <span>&#128071;</span></p>   
              </div> 
            }
            
        </Jumbotron>
        )
    }
}

export default displayInfo
