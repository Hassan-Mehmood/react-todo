import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Card = (props) => {
  let renderTaks = props.tasks.map((task) => {
    return (
      <div className="cardContainer">
        <div className="text">{task.name}</div>
        <div className="trashIcon">
          <BsFillTrashFill className="trashCan"/>
        </div>
      </div>
    );
  });

  return (
    <div>{renderTaks}</div>
  );
};

export default Card;
