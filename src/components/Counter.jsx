import React from "react";
import "../App.css";

function Counter({ count, setCount }) {
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  return (
    <div
      className="addMargin"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={decrement}
        className="btn btn-dark"
        style={{
          height: "3rem",
          width: "3rem",
          fontWeight: "bolder",
          marginRight: "0.5rem",
        }}
      >
        -
      </button>

      <span
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "0.5rem",
          color: "white",
        }}
      >
        {count}
      </span>

      <button
        className="btn btn-dark"
        onClick={increment}
        style={{
          height: "3rem",
          width: "3rem",
          fontWeight: "bolder",
          marginLeft: "10px",
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
