import React, { useContext, useState, useEffect } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import formStyles from "../../styles/Form.module.css";

const Form = () => {
  const { addTodo, clearList, editItem, editTodo } =
    useContext(TodoListContext);

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTodo(title);
      setTitle("");
    } else {
      editTodo(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className={formStyles.form}>
      <input
        className={formStyles.form_input}
        type="text"
        placeholder="Add Todo..."
        required
        value={title}
        onChange={handleChange}
      />
      <div className={formStyles.form_buttons}>
        <button className={formStyles.form_button} type="submit">
          {editItem ? "Edit Todo" : "Add Todo"}
        </button>
        <button className={formStyles.form_button} onClick={clearList}>
          Clear All
        </button>
      </div>
    </form>
  );
};

export default Form;
