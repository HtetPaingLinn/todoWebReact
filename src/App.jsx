import React, { useState } from "react";
import ForHeading from "./ForHeading";
import ListCreateForm from "./ListCreateForm";
import Status from "./Status";
import ListGroup from "./ListGroup";

const App = () => {
  // const tasks = [
    
  // ];
  const [tasks,setTask] = useState([
    {
      id: 1,
      title: "Read JS book",
      isDone: true,
    },
    {
      id: 2,
      title: "Finding Job",
      isDone: false,
    },
    {
      id: 3,
      title: "Meet client",
      isDone: false,
    },
    {
      id: 4,
      title: "Study Japanese",
      isDone: true,
    },
    {
      id: 5,
      title: "Prepare for meeting",
      isDone: false,
    },
  ]);


  const addTask = (job) => {
    const newTask = {
      id:Date.now(),
      title: job,
      isDone:false
    }
    setTask([...tasks, newTask]);

  }

  const checkTask = (id) => {
    setTask(tasks.map(task => {
      if(id === task.id){
        task.isDone = !task.isDone
    }
    return task;
  }))
  }

  const deleteTask = (id) => {
    setTask(tasks.filter(task => task.id !== id))  
  }

  return (
    <div className="w-[400px] mx-auto mt-20">
      <ForHeading head = "Todo List"/>
      <ListCreateForm addTask = {addTask}/>
      <Status tasks = {tasks} />
      <ListGroup deleteTask = {deleteTask} checkTask = {checkTask} tasks = {tasks}/>
    </div>
  );
};

export default App;
