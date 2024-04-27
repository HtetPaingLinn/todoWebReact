import React from "react";
import ForHeading from "./ForHeading";
import ListCreateForm from "./ListCreateForm";
import Status from "./Status";
import ListGroup from "./ListGroup";

const App = () => {



  return (
    <div className="w-[400px] mx-auto mt-20">
      <ForHeading head = "Todo List"/>
      <ListCreateForm />
      <Status />
      <ListGroup/>
    </div>
  );
};

export default App;
