import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function Chores() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    API.getChores("5ecc800d2c0155578876c0bc")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function addTodo(todo) {
    API.createChore(todo);
    setTodos([todo, ...todos]);
  }

  function toggleComplete(todo) {
    setTodos(
      todos.map((element) => {
        if (element._id === todo._id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
    API.updateChore(todo._id, {
      ...todo,
      completed: !todo.completed,
    });
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo._id !== id));
    API.deleteChore(id);
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        Chores
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default Chores;
