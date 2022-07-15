import React, { useState } from "react";
import { BsFillTrashFill, BsCheckLg } from "react-icons/bs";

const Card = ({ tasks, deleteTaskHandler }) => {
  let [doneTask, setDoneTask] = useState(false);

  const deleteTasks = (id) => {
    deleteTaskHandler(id);
  };

  let renderTaks = tasks.map((task) => {
    return (
      <div key={task.id} className="cardContainer">
        <div className="flex">
          <div className="text">
            <h2 className={doneTask ? "taskDone" : ""}>{task.name}</h2>
          </div>
          <div className="Icons">
            <BsCheckLg
              className="tickIcon"
              onClick={() => setDoneTask(!doneTask)}
            />
            <BsFillTrashFill
              className="trashCan"
              onClick={() => deleteTasks(task.id)}
            />
          </div>
        </div>
      </div>
    );
  });
  return <div>{renderTaks}</div>;
};

export default Card;
