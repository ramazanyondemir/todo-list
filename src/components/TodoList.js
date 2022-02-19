import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} id={index} deleteTodo={deleteTodo} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
