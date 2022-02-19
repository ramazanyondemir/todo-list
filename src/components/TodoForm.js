import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const TodoForm = ({ todos, setTodos, todoValue, setTodoValue }) => {
  const handleSubmit = () => {
    setTodos([todoValue, ...todos]);
  };

  return (
    <form id="todo-form">
      <input
        type="text"
        className="todo-input"
        value={todoValue}
        placeholder="New Tast"
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        className="add-todo"
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
