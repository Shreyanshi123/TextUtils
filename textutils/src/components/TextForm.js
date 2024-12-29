import React,{useState}from "react";




export default function TextForm(props) {
    const [text,setText] = useState("Enter Your Text here");
    // console.log(useState("Enter your text 2.0"))

    function onChangeHandler(event){
        setText(event.target.value)

    }
    function onClickUpHandler(){
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("UpperCase","success")
    }
    function onClickLowHandler(){
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("LowerCase","success")
    }
    function onClickClearHandler(){
        let newText = " "
        setText(newText)
        props.showAlert("ClearText","success")
    }
    function onClickCopyHandler(){
      navigator.clipboard.writeText(text);
      // alert("Copy to Clipboard")
      props.showAlert("Copied to clipboard","success")
    }
    function onClickRemoveSpaceHandler(){
      let newText = text.split(/[  ]+/)
      setText(newText.join(" "))
      props.showAlert("ExtraSpaces Removed","success")
    }

  return (
    <div>
      <div className="mb-3 container">
        <label htmlFor="myBox" className="form-label">
        <h2>{props.heading}</h2>
        </label>
        <textarea onChange={onChangeHandler}
          style={{backgroundColor:props.mode==="light"?"white":"#04203c",
                  color:props.mode==="light"?"black":"white"
          }}
          className="form-control"
          id="myBox"
          rows="9"
          value={text}
        ></textarea>
        <button className={`btn btn-${props.mode==="dark"?"dark":"primary"} mx-2`} onClick={onClickUpHandler}>Convert to UpperCase</button>
        <button className={`btn btn-${props.mode==="dark"?"dark":"primary"} mx-2`} onClick={onClickLowHandler}>Convert to LowerCase</button>
        <button className= {`btn btn-${props.mode==="dark"?"dark":"primary"} mx-2`} onClick={onClickClearHandler}>Clear Text</button>
        <button className={`btn btn-${props.mode==="dark"?"dark":"primary"} mx-2`} onClick={onClickCopyHandler}>Copy to Clipboard</button>
        <button className={`btn btn-${props.mode==="dark"?"dark":"primary"} mx-2`} onClick={onClickRemoveSpaceHandler}>Remove Extra Spaces</button>
        

      </div>
      <div className="container my-3 " style={{color:props.mode==="light"?"black":"white"}}>
        <h1> Your Text Summmary</h1>
        <p> Total Number of {text.split(" ").length} words and Total number of {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes Total minutes required to read this</p>
        <h2>{!text?"Enter your text to preview":"Preview"}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
