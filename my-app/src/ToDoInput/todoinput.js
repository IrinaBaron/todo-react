import React from "react";
import { useState } from "react";
import todosData from "../todosData";

const ToDoInput = props => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (todo !== '') {
            let newObj = {
                id: todo,
                description: todo,
                completed: false,
            }
            todosData.push(newObj)
            console.log(todosData)
            setTodos([...todos, todo]);
            setTodo('');
        }
    }

    return (
        <div className="input-wrapper">
            <input className="input-add" placeholder="create a new todo" type="text"
                onChange={(e) => {
                    setTodo(e.target.value)
                }}
            />

            <button className="btn-add" onClick={addTodo}>add</button>
        </div>
    )
}

export default ToDoInput;