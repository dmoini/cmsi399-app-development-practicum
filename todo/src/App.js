import React, { useState } from "react";

import AddTodo from "./AddTodo.js";
import Todos from "./Todos.js";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Create a Todo React App" },
    { id: 2, content: "Use useState" },
    { id: 3, content: "Convert Ian to Angular" },
  ]);

  const deleteTodo = id => {
    let newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodo = todo => {
    let newTodo = {
      id: Math.random(),
      content: todo,
    };
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todos</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
