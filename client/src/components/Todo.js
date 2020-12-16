import React,{useState,useEffect} from 'react';
import axios from "axios";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Input
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Draggable from "react-draggable";

import "./style.css";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [data, setData] = useState([]);

  /*useEffect(() => {
    axios
      .get("/api/users/")
      .then(async function (response) {
        console.log(response.data);
        await setData(response.data);
      });
  });          <div>USERS:{data.map((list)=> (<p>{list.name}</p>))}</div>  */
  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
      <div style={{opacity:"0.9"}}>
    <Draggable>
      <div id="todo-list">
        <span
          style={{
            color: "white",
            fontFamily: "fantasy",
            fontSize: "3rem",
            fontStretch: "expanded",
          }}
        >
          Todo List
        </span>

        <form onSubmit={handleSubmit}>
          <Input
          style={{marginRight:"1%"}}
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <Button type="submit" primary>Add Todo</Button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} >
            <div >
              <Input
                type="checkbox"
                id="completed"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {todo.id === todoEditing ? (
                <Input
                  type="text"
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <span style={{color:"white",fontSize:"2rem",fontWeight:"bolder",marginLeft:"2%" } }>{todo.text}</span>
              )}
            </div>
            <div className="todo-actions">
              {todo.id === todoEditing ? (
                <Button onClick={() => submitEdits(todo.id)}>
                  Submit Edits
                </Button>
              ) : (
                <Button onClick={() => setTodoEditing(todo.id)} secondary>Edit</Button>
              )}

              <Button onClick={() => deleteTodo(todo.id)} style={{color:"white",backgroundColor:"red"}}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </Draggable>
    </div>
  );
};

export default Todos;
