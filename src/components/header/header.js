import React, { useState } from "react";

const Header = ({ inputs, setInputs }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTodo = { id: id, todo: todo, isDone: false };
    setInputs([...inputs, newTodo]);
    setTodo("");
  };

  return (
    <div className="container">
      <h2>React To-Do List</h2>
      <form className="mt-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Add To Do"
          className="mx-4 p-1"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          type="submit"
          value="Add"
          className="px-3 py-1 bg-success border"
        />
      </form>
    </div>
  );
};

export default Header;
