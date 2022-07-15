import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Field from "./components/field/Field";
import Cards from "./components/cards/Cards";

function App() {
  const STORAGE_KEY = "Tasks";
  let [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const taskHandler = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTaskHandler = (id) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Header />
      <Field tasks={tasks} taskHandler={taskHandler}></Field>
      <Cards tasks={tasks} deleteTaskHandler={deleteTaskHandler}></Cards>
    </div>
  );
}

export default App;
