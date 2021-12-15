import React, { useContext } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import listItemStyles from "../../styles/ListItem.module.css";

const ListItem = ({ todo }) => {
  const { removeTodo, findItem } = useContext(TodoListContext);

  return (
    <li className={listItemStyles.list_item}>
      <div>
        <button
          className={listItemStyles.list_item_edit}
          onClick={() => findItem(todo.id)}
        >
          <i class="bi bi-pencil-square"></i>
        </button>
        <span className={listItemStyles.list_item_title}>{todo.title}</span>
      </div>
      <div>
        <button
          className={listItemStyles.list_item_delete}
          onClick={() => removeTodo(todo.id)}
        >
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
