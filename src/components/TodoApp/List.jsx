import React, { useContext } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import ListItem from "./ListItem";
import listStyles from "../../styles/List.module.css";

const List = () => {
  const { todos } = useContext(TodoListContext);

  return (
    <>
      {todos.length ? (
        <ul className={listStyles.list}>
          {todos.map((todo) => {
            return <ListItem todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div className={listStyles.empty_list}>
          <h6>No Todos</h6>
        </div>
      )}
    </>
  );
};

export default List;
