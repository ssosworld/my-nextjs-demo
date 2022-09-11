import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { Todo } from "../../core/redux/types/Todo";
import useTodoAction from "../../core/hooks/useTodoAction";

type Props = {
  todo: Todo;
};

function Item({ todo }: Props) {
  const { onToggle, onRemove } = useTodoAction(todo.id);

  return (
    <TodoItemBlock>
      <CheckCircle done={todo.done} onClick={onToggle}>
        {todo.done && <MdDone />}
      </CheckCircle>
      <Text done={todo.done}>{todo.text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(Item); // 다른 항목이 업데이트 될 때, 불필요한 리렌더링을 방지하게 되어 성능을 최적화

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;
