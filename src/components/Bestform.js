import React, { useState } from 'react';


// console.log(useState('Enter text here2'))

export default function Bestform(props) {
  const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
  }
  const handleloClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
}
const handleclearClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = '';
  setText(newText);
}
  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value)
}

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  const handleExtraspace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))    
  }

  const [text, setText] = useState('Enter text here');
  // setText("New Text");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label html-for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lowercasecase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraspace}>Remove Extra Space</button>
    </div>
    <div className="container my-3">
      <h1>You Text Summary</h1>
      <p>{text.split(" ").length}3000 Words {text.length}</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
