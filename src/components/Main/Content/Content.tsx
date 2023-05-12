import * as React from "react";
import AddTask from "./AddTask/AddTask";

const Content: React.FC<any> = () => {
  return (
    <div className="ps-[80px] pt-[100px]">
      <AddTask />
    </div>
  );
};

export default Content;
