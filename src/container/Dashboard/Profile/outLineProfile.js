import React, { useState } from "react";
import './outLineProfile.css';
import InlineEdit from './outLineProfileEditing';
import { Jumbotron } from "reactstrap";
function OutLineProfile() {
  const [storedHeading, setStoredHeading] = useState(
    "Dilip Kumar"
  );
  const [storedText, setStoredText] = useState("manishkumar199222@gmail.com");
  const [storedAbout, setStoredAbout]=useState("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae") 
  return (
    <div>
        <Jumbotron className="profile">
            <div className="profileParent">
                <div style={{marginRight:"20px",flexGrow:3}}>
                <h4 style={{borderBottom:"1px solid grey"}}> Profile Details</h4>
                <br></br>
      <h5>
        {/* Not editable right here.{" "} */}
        <InlineEdit
          text={storedHeading}
          onSetText={text => setStoredHeading(text)}
        />
      </h5>
      <p>
        <InlineEdit text={storedText} onSetText={text => setStoredText(text)} />
      </p>
    
      <p >
        <InlineEdit textAreaRequired="true" text={storedAbout} onSetText={text => setStoredAbout(text)} />
      </p>

      
                </div>
                <div className="profilePic" style={{flexGrow:1}}>
                    <img src={require('../../../image/dilip.jpg')} width="250px" height="250px"/>
                </div>
               
            </div>
            <div className="socialLink">
                <i className="material-icons" style={{fontSize:"3rem"}}>add_circle</i> 
                <i className="material-icons" style={{fontSize:"3rem"}}>add_circle</i> 
                </div>
      
      </Jumbotron>
    </div>
  );
}

export default OutLineProfile;
