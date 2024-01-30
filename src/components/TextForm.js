import React,{useState} from 'react'


export default function TextForm(props) {
    const[text,setText] = useState('');


    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick=()=>{
        console.log("lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
     const handleOnChange=(event)=>{                                     
        //  to type something in box
        // console.log("On change");
        setText(event.target.value);
    }
      const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        // document.getSelection().removeAllRanges();   //remove selected text//
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied successfully!","success");
      }

      const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed successfully!","success");
      }
      const handleClear=()=>{
        let newText=("")
        setText(newText)
        props.showAlert("Text cleared successfully!","success");
      }

  return (
    <div>
    <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
    <h1 className='mb-4'>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#13466e':'white' , color:props.mode ==='dark' ? 'white':'#042743'}} rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
</div>

<div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
    <h1>Your Text summery</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text:"Nothing to preview!"}</p>
</div>
</div>
  )
}
