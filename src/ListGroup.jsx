import React from "react";
import EmprtList from "./EmprtList";
import List from "./List";

function ListGroup() {
  const tasks = [
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
  ];
  return (
    <div id="listGroup">
      <EmprtList />

      {tasks.map((task) => (
        <List task={task.title} isDone={task.isDone} />
      ))}

      {/* <List task="San" isDone = {true}/>
      <List task="San" isDone = {false}/>
      <List task="San" isDone = {true}/>
      {tasks.map((task) => (
        <div className= {` border ${task.isDone && 'opacity-40 scale-75'} bg-gray-200 border-gray-300 p-2 mb-3`}>
            <p>
                {task.id} | {task.isDone?"done":"not yet"}
            </p>
            <p>
                {task.title}
            </p>
        </div>
      ))} */}
    </div>
  );
}

export default ListGroup;
