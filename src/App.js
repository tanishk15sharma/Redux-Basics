import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <div>
        <h1>Counter: {count} </h1>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increase by 10
        </button>
      </div>
    </div>
  );
}

export default App;
