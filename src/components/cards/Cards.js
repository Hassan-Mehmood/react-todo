import React from "react";
import Card from "../card/Card";
const Cards = (props) => {
  return (
    <div>
      <Card tasks={props.tasks}></Card>
    </div>
  );
};

export default Cards;
