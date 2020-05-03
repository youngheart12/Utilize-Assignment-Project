import React, { useState, useEffect, useRef } from "react";
import useKeypress from '../../Inline Editing/hooks/useKeyPress'
import useOnClickOutside from "../../Inline Editing/hooks/useOnClickOutside";
import {Tooltip} from 'reactstrap';
import './outLineProfile.css';
import DOMPurify from "dompurify";

function InlineEdit(props) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [inputValue, setInputValue] = useState(props.text);
  const toggle = () => setTooltipOpen(!tooltipOpen);
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
      if (enter) {
        props.onSetText(inputValue);
        setIsInputActive(false);
      }
      // if Escape is pressed, revert the text and close the editor
      if (esc) {
        setInputValue(props.text);
        setIsInputActive(false);
      }
    }
  }, [enter, esc]); // watch the Enter and Escape key presses

  return (
    <span className="inline-text" ref={wrapperRef}   >
      <span
        ref={textRef}
        
        onClick={() => setIsInputActive(true)}
        className={`inline-text_copy inline-text_copy--${
          !isInputActive ? "active" : "hidden"
        }`}
      >
        {props.text}
      </span>
     
      {props.textAreaRequired?<textarea 
      ref={inputRef}
      style={{ width:"550px",height:"150px" }}
        
      value={inputValue}
      onChange={e => {
        // sanitize the input a little
        setInputValue(DOMPurify.sanitize(e.target.value));
      }}
      className={`inline-text_input inline-text_input--${
        isInputActive ? "active" : "hidden"
      }`}
      ></textarea>:
      <input
      ref={inputRef}
      // set the width to the input length multiplied by the x height
      // it's not quite right but gets it close
      style={{ minWidth: Math.ceil(inputValue.length) + "ch" }}
      value={inputValue}
      onChange={e => {
        // sanitize the input a little
        setInputValue(DOMPurify.sanitize(e.target.value));
      }}
      className={`inline-text_input inline-text_input--${
        isInputActive ? "active" : "hidden"
      }`}
    />}
    
    </span>
  );
}

export default InlineEdit;
