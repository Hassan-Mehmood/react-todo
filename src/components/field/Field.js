import { useState } from "react";

import React from "react";

const Field = ({ taskHandler }) => {
  let [todo, setTodo] = useState({
    id: "",
    name: "",
  });

  const on_Submit = (e) => {
    e.preventDefault();
    todo.id = Math.floor(Math.random() * 10000) + 1;
    if (todo.name === "") {
      alert("Field is empty");
      return;
    }
    setTodo({ name: "", id: "" });

    taskHandler(todo);
  };

  return (
    <div>
      <form onSubmit={on_Submit}>
        <input
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value })}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Field;
