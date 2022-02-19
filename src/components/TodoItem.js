import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const TodoItem = ({ todo, deleteTodo, id }) => {
  return (
    <div className="todo">
      <div className="todo-content">
        <p>{todo}</p>
      </div>
      <button
        className="delete-todo"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <AiOutlineClose className="delete-todo-btn" />
      </button>
    </div>
  );
};
