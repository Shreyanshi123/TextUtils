import React from "react";

export default function Alert(props) {
    function captialise(input){
        input=input.charAt(0).toUpperCase()+input.slice(1);
        return input
    }
  return (
    <div>
        
      {props.alert && <div className={`alert alert-${props.alert.type}  fade show`} role="alert">
        {/* <strong>Holy guacamole!</strong> {props.mode==="dark"?"Dark":"Light"} Mode Enabled */}
        {props.alert.message}  :   {captialise(props.alert.type)}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>}
    </div>
  );
}
