import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState, Todo } from "../../core/recoil/Todo";

interface Props {
  item: Todo;
}

const replaceItemAtIndex = (
  arr: Todo[],
  index: number,
  newValue: Todo,
): Todo[] => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: Todo[], index: number): Todo[] => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default function TodoItem({ item }: Props) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      {/* <Checkbox> */}
      <Input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      {/* </Checkbox> */}
      <button type="button" onClick={deleteItem}>
        X
      </button>
    </div>
  );
}

const Input = styled.input`
  width: 20px;
  height: 20px;
  appearance: auto;
`;
