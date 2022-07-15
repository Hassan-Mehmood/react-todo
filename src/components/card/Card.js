import React, { useState } from "react";
import { BsFillTrashFill, BsCheckLg } from "react-icons/bs";

const Card = ({ tasks, deleteTaskHandler }) => {
  let [doneTask, setDoneTask] = useState(false);

  const deleteTasks = (id) => {
    deleteTaskHandler(id);
  };

  const taskDone = (task) => {
    if (task.complete !== true) {
      task.complete = true;
      setDoneTask(() => !doneTask);
    } else {
      setDoneTask(() => !doneTask);
      task.complete = false;
    }
  };

  let renderTaks = tasks.map((task) => {
    return (
      <div
        key={task.id}
        className={task.complete ? "taskDone cardContainer" : "cardContainer"}
      >
        <div className="flex">
          <div className="text">
            <h2>{task.name}</h2>
          </div>
          <div className="Icons">
            <BsCheckLg className="tickIcon" onClick={() => taskDone(task)} />
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
