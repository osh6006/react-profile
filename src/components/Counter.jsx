import React, { useState } from "react";

export default function Counter({ count, setCount }) {
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        onClick={() => {
          setCount(prev => prev + 1);
        }}
      >
        Add +
      </button>
    </div>
  );
}
