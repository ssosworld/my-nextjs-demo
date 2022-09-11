import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../redux";
import { increment, decrement } from "../redux/modules/Counter";

const useCounter = () => {
  const countNum = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increment()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrement()), [dispatch]);

  return {
    countNum,
    onIncrease,
    onDecrease,
  };
};

export default useCounter;
