import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case","success");
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("cleared the text successfully","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode==='black'?'white':'black'}}>
            <div>
                <h1>{props.heading} </h1>
             <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} rows={8} />
            </Form.Group>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear the text</button>
        </div>
        <div className="container my-3">
            <h2>your text summaary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}minute read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
