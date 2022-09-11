import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./Template";
import TodoHead from "./Head";
import TodoList from "./List";
import TodoAdd from "./Add";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function Main() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
        {/* 안녕하세요 */}
        <TodoHead />
        <TodoList />
        <TodoAdd />
      </TodoTemplate>
    </div>
  );
}

export default Main;
