import * as React from "react";
import Desc from "./Desc/Desc";
import NavAddTask from "./NavAddTask/NavAddTask";

const AddTask: React.FC<any> = () => {
  return (
    <div>
      <Desc />
      <NavAddTask />
    </div>
  );
};

export default AddTask;
