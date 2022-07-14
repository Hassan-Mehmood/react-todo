import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Field from "./components/field/Field";
import Cards from "./components/cards/Cards";

function App() {
  let [tasks, setTasks] = useState([]);

  const taskHandler = (task) => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("tasks"));
    if (items) {
      setTasks(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <Field tasks={tasks} taskHandler={taskHandler}></Field>
      <Cards tasks={tasks}></Cards>
    </div>
  );
}

export default App;
