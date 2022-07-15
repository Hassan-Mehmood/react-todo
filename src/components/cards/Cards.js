import React from "react";
import Card from "../card/Card";
const Cards = ({ tasks, deleteTaskHandler }) => {
  const deleteTask = (id) => {
    deleteTaskHandler(id);
  };

  return (
    <div>
      <Card tasks={tasks} deleteTaskHandler={deleteTask}></Card>
    </div>
  );
};

export default Cards;
