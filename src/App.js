import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Get out of bed",
      status: false,
    },
    {
      id: 2,
      name: "Drink lots of coffee",
      status: false,
    },
    {
      id: 3,
      name: "Run Zeynep run",
      status: false,
    },
  ]);

  const addTodo = (todo) => {
    if (todo.name) {
      setTodos([...todos, todo]);
    }
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let validTodo = todos.find((todo) => todo.id === id);
    validTodo.status = !validTodo.status;
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>My ToDo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
