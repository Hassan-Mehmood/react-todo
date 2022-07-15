import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Card = ({ tasks, deleteTaskHandler }) => {
  const deleteTasks = (id) => {
    deleteTaskHandler(id);
  };

  let renderTaks = tasks.map((task) => {
    return (
      <div key={task.id} className="cardContainer">
        <div className="text">{task.name}</div>
        <div className="trashIcon">
          <BsFillTrashFill className="trashCan" onClick={() => deleteTasks(task.id)} />
        </div>
      </div>
    );
  });
  return <div>{renderTaks}</div>;
};

export default Card;
