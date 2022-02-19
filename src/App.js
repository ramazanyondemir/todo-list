import React from "react";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState(["deneme", "denemeeee"]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <div className="container">
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
