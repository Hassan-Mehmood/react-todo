import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="text">Hello</div>
      <div className="trashIcon">
        <BsFillTrashFill />
      </div>
    </div>
  );
};

export default Card;
