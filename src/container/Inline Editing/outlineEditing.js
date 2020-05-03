import React, { useState, useEffect, useRef } from "react";
import useKeypress from "./hooks/useKeyPress.js";
import useOnClickOutside from "./hooks/useOnClickOutside";
import DOMPurify from "dompurify";
import './outlineEditing.css';


function InlineEdit(props) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(props.text);

  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);

  const enter = useKeypress("Enter");
  const esc = useKeypress("Escape");

  // check to see if the user clicked outside of this component
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      props.onSetText(inputValue);
      setIsInputActive(false);
    }
  });

  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);

  useEffect(() => {
    if (isInputActive) {
      // if Enter is pressed, save the text and case the editor
      // if (enter) {
      //   props.onSetText(inputValue);
      //   setIsInputActive(false);
      // }
      // if Escape is pressed, revert the text and close the editor
      if (esc) {
        setInputValue(props.text);
        setIsInputActive(false);
      }
    }
  }, [enter, esc]); // watch the Enter and Escape key presses

  return (
   
    <span
      className="inline-text"
     
      ref={wrapperRef}
    >
      <span
        ref={textRef}
      
        onClick={() => setIsInputActive(props.editMode)}
        className={`inline-text_copy inline-text_copy--${
          !isInputActive ? "active" : "hidden"
        }`}
      >
        {props.text}
      </span>
      {props.textAreaNeeded?
      <textarea
      ref={inputRef}
      // set the width to the input length multiplied by the x height
      // it's not quite right but gets it close
      style={{
       width:"820px",
       height:"100px"
        
       
      }}
      value={inputValue}
     
      onChange={e => {
        // sanitize the input a little
        setInputValue(DOMPurify.sanitize(e.target.value));
      }}
      className={`inline-text_input inline-text_input--${
        isInputActive ? "active" : "hidden"
      }`}
    />:
    <input
    ref={inputRef}
    // set the width to the input length multiplied by the x height
    // it's not quite right but gets it close
    style={{
      minWidth: 50+"ch"
      
     
    }}
    value={inputValue}
    maxLength="50"
    onChange={e => {
      // sanitize the input a little
      setInputValue(DOMPurify.sanitize(e.target.value));
    }}
    className={`inline-text_input inline-text_input--${
      isInputActive ? "active" : "hidden"
    }`}
   id="one"
  />  
    
    }
    
    </span>
  );
}

export default InlineEdit;
