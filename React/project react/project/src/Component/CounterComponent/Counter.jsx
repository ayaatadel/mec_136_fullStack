import React, { useState } from "react";
export default function counter() {
  let [counterValue,setCounter] = useState(0);
  let [title,setTitle] = useState("");
 
  return (
    <div className="bg-secondary text-light d-flex justify-content-around p-3 m-3">
      <h1 className="text-warning">{title}</h1>
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
           setCounter(++counterValue) ;
            // console.log(counterValue);
          }}
        >
          +
        </button>
      </div>
      <div> counter: <span>{counterValue}</span> </div>
      <div>
        <button
          className="btn btn-danger"
          onClick={() => {
              setCounter(--counterValue) ;
            // console.log(counterValue);
          }}
        >
          -
        </button>
      </div>
       <div>
        <button
          className="btn btn-danger"
          onClick={() => {
             title="136";

              setTitle(title) ;
            // console.log(counterValue);
          }}
        >
          Change Title
        </button>
      </div>
    </div>
  );
}
