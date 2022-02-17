import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div className="todo" key={index}>
          <p>{todo}</p>
          <AiOutlineClose />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
