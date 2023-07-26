import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper Case", "success");
  };

  const handleOnClickLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower Case", "success");
  };

  const handleOnClickSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleOnClickClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here.....");

  return (
    <>
      <div>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.title}
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleOnClick}
        >
          Upper Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleOnClickLower}
        >
          Lower Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleOnClickClear}
        >
          Clear Text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleOnClickSpaces}
        >
          Remove Extra Spaces
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{text.split("\n").length} Number of Lines</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview : </h3>
        <p>{text}</p>
      </div>
    </>
  );
}
