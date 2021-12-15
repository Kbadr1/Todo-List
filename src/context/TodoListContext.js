import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4} from "uuid";


export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {

    const initialState = JSON.parse(localStorage.getItem("todos")) || [];

    const [todos, setTodos] = useState(initialState);

    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title) => {
        setTodos([...todos, { title, id: uuidv4() }])
    }

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const clearList = () => {
        setTodos([]);
    }

    const findItem = id => {
        const item = todos.find(todo => todo.id === id);
        setEditItem(item);
    }

    const editTodo = (title, id) => {
        const newTodos = todos.map(todo => (todo.id === id ? {title, id} : todo));
        setTodos(newTodos);
        setEditItem(null);
    }

    return (
        <TodoListContext.Provider value={{ todos, addTodo, removeTodo, clearList, findItem, editItem, editTodo }}>
            {props.children}
        </TodoListContext.Provider>
    );
}
 
export default TodoListContextProvider;