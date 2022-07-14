import { useState } from "react";

import React from "react";

const Field = ({ tasks }) => {
  let [todo, setTodo] = useState({
    name: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (todo.name === "") {
      alert("Field are empty");
      return;
    }

    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={add}>
        <input
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value })}
        />
        <button style={{ margin: "1rem", padding: "0.5rem 1rem" }}>Add</button>
      </form>
    </div>
  );
};

export default Field;
