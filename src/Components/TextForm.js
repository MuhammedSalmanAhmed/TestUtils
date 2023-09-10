import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("UpperCase was Clicked: "+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success")
    }

    const handleLoClick = () =>{
        //console.log("LowerCase was Clicked: "+text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success")
    }

    const handleOnChange = (event) =>{
        //console.log("Used OnChange");
        setText(event.target.value)
    }

    const [text,setText]= useState("");
    // text= "New text";   This is wrong way.
    // text= setText("New Text");   This is correct way.
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words , {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Write something in text box to preview"}</p>
    </div>
    </>
  )
}
