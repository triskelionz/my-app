import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    addTodo({
      id: 1,
      name: value,
      status: false,
    });
    setValue("");
  };
  return (
    <div className="todoForm">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todoForm_input"
        type="text"
        placeholder="Enter a todo ..."
      />
      <button
        onClick={() => handleClick()}
        className="todoForm_btn"
        type="submit"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;