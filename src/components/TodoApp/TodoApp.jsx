import React from "react";
import Form from "./Form";
import List from "./List";
import todoAppStyles from "../../styles/TodoApp.module.css";

const TodoApp = () => {
  return (
    <div className={todoAppStyles.TodoApp}>
      <h1 className={todoAppStyles.title}>Todo App</h1>
      <Form />
      <List />
    </div>
  );
};

export default TodoApp;
