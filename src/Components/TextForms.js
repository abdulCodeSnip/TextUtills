import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForms(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // handling UpperCase Event
  const convertToUpperCase = () => {
    let myUpperText = text.toUpperCase();
    setText(myUpperText);
    props.showAlert("Converted to UpperCase", "success");
  };

  // Handling LowerCase Event
  const convertToLowerCase = () => {
    let myLowerText = text.toLowerCase();
    setText(myLowerText);
    props.showAlert("Converted to LowerCase", "success");
  };

  // Handling Clear Text Event
  const clearTextHandler = () => {
    let myClearText = "";
    setText(myClearText);
    props.showAlert("All text Cleared", "success");
  };

  // Handling Extra Spaces Event
  const removeExtraSpaces = () => {
    let removeSpaces = text.split(/[ ]+/);
    setText(removeSpaces.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  // Hanling Copying Text Event
  const copyText = () => {
    let textCopy = document.getElementById("textBox");
    textCopy.select();
    navigator.clipboard.writeText(textCopy.value);
    props.showAlert("Text is copied to your clipBoard", "success");
  };

  const [text, setText] = useState("Enter text");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" name="textarea" id="textBox"
            rows="8" value={text} onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className={`btn border-secondary btn-${props.mode === 'dark' || props.mode === 'success' ? 
            'dark' : 'secondary'
          } mx-2`}
          onClick={convertToUpperCase}
        >Convert to Uppercase
        </button>

        <button 
          className={`btn border-secondary btn-${props.mode === 'dark' || props.mode === 'success' ? 
            'dark' : 'secondary'
          } mx-2`}
          onClick={convertToLowerCase}
        >Convert to LowerCase
        </button>

        <button
          className={`btn border-secondary btn-${props.mode === 'dark' || props.mode === 'success' ? 
            'dark' : 'secondary'
          } mx-2`}
          onClick={clearTextHandler}
        >Clear Text
        </button>

        <button
          className={`btn border-secondary btn-${props.mode === 'dark' || props.mode === 'success' ?
            'dark' : 'secondary'
          }`}
          onClick={removeExtraSpaces}
        >Remove extra spaces
        </button>

        <button
          className={`btn border-secondary btn-${props.mode === 'dark' || props.mode === 'success' ? 'dark' : 'secondary' } mx-2`}
          onClick={copyText}>
          Copy Text</button>
      </div>
      <div
        className={`container my-3`}
      >
        <h2>Your Text Summary</h2>
        <p>{text.concat(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Text Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
