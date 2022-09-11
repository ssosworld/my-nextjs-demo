import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../redux";
import { addTodo } from "../redux/modules/Todo";

const useTodos = () => {
  const todoList = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const onAddTodo = useCallback(
    (text: string) => dispatch(addTodo(text)),
    [dispatch],
  );

  return {
    todoList,
    onAddTodo,
  };
};

export default useTodos;
