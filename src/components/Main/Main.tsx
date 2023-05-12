import * as React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";

const Main: React.FC<any> = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

export default Main;
