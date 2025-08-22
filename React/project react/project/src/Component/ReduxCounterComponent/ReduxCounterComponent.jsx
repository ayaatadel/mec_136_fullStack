import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
  resetCounter,
} from "../Redux/store/slices/counter";
export default function ReduxCounterComponent() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-secondary text-light d-flex justify-content-around p-3 ">
      <h1 className="text-warning">ReduxCounterComponent</h1>
      <div>
        <button
          className="btn btn-success p-2"
          onClick={() => dispatch(increaseCounter(counter + 1))}
        >
          +1
        </button>
      </div>
      <div className="text-info fs-4 p-2"> counter: {counter} </div>
      <div>
        <button
          className="btn btn-danger p-2"
          onClick={() => dispatch(decreaseCounter(counter - 1))}
        >
          -1
        </button>
      </div>
      <div>
        <button
          className="btn btn-info p-2"
          onClick={() => dispatch(resetCounter())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
