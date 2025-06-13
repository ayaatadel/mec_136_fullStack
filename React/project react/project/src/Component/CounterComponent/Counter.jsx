import React, { useState } from "react";

export default function counter() {
  let [counterValue,setCounter] = useState(0);
  return (
    <div className="bg-secondary text-light d-flex justify-content-around p-3 m-3">
      <div> Counter: <span>{counterValue}</span> </div>
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
           setCounter(++counterValue) ;
            console.log(counterValue);
          }}
        >
          +
        </button>
      </div>


      <div>
        <button
          className="btn btn-danger"
          onClick={() => {
              setCounter(--counterValue) ;
            console.log(counterValue);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
