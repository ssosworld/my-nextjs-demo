import React from "react";
import useCounter from "../../core/hooks/useCounter";

function Count() {
  const { countNum, onIncrease, onDecrease } = useCounter();

  return (
    <div>
      <p>you clicked ? {countNum}</p>
      <button type="button" onClick={onIncrease}>
        Click +1
      </button>

      <button type="button" onClick={onDecrease}>
        Click -1
      </button>
    </div>
  );
}

export default Count;
