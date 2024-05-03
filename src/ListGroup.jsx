import React from "react";
import EmprtList from "./EmprtList";
import List from "./List";

function ListGroup(props) {
  return (
    <div id="listGroup">
      <EmprtList />

      {props.tasks.map((task) => (
        <List
          deleteTask = {props.deleteTask}
          checkTask={props.checkTask}
          key={task.id}
          task={task.title}
          isDone={task.isDone}
          id ={task.id}
        />
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
