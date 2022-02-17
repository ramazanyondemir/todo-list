import React from "react";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState(["deneme", "denemeeee"]);

  return (
    <>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
