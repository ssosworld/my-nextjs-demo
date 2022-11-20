import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../../core/recoil/Todo";
import TodoItemCreator from "../todoListRecoil/Add";
import TodoListFilters from "../todoListRecoil/Filter";
import TodoItem from "../todoListRecoil/Item";
import TodoListStats from "../todoListRecoil/List";

// recoil hook
export default function RecoilTodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
