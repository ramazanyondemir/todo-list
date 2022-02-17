import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const TodoForm = ({ todos, setTodos, todoValue, setTodoValue }) => {
  const handleSubmit = (e) => {
    setTodos([todoValue, ...todos]);
  };

  return (
    <form id="todo-form">
      <input
        type="text"
        className="todo-input"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        className="delete-todo"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          setTodoValue("");
        }}
      >
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default TodoForm;
