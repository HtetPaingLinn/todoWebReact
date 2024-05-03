import React, { useState } from "react";
import ForHeading from "./ForHeading";
import ListCreateForm from "./ListCreateForm";
import Status from "./Status";
import ListGroup from "./ListGroup";

const App = () => {
  // const tasks = [

  // ];
  const [tasks, setTask] = useState([

  ]);

  const addTask = (job) => {
    const newTask = {
      id: Date.now(),
      title: job,
      isDone: false,
    };
    setTask([...tasks, newTask]);
  };

  const editTask = (id, newTask) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.title = newTask;
        }
        return task;
      })
    )
  }

  const checkTask = (id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="w-[400px] mx-auto mt-20">
      <ForHeading head="Todo List" />
      <ListCreateForm addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup editTask={editTask} deleteTask={deleteTask} checkTask={checkTask} tasks={tasks} />
    </div>
  );
};

export default App;
