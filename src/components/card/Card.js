import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Card = ({ tasks, deleteTaskHandler }) => {
  const deleteTasks = (e) => {
    console.log(e.target.key)
    deleteTaskHandler();
  };

  let renderTaks = tasks.map((task) => {
    return (
      <div key={task.id} className="cardContainer">
        <div className="text">{task.name}</div>
        <div className="trashIcon">
          <BsFillTrashFill className="trashCan" onClick={deleteTasks} />
        </div>
      </div>
    );
  });
  return <div>{renderTaks}</div>;
};

export default Card;
