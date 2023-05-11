import React from "react";
import "./app.css";

import AddButton from "./components/UI/AddButton/AddButton";
import Button from "./components/UI/Button/Button";
import Dropdown from "./components/UI/Dropdown/Dropdown";

export const App = () => {
  return (
    <div className="App">
      <AddButton />
      <Button text={"Стоп"} color={"red"} />
      <Dropdown />
    </div>
  );
};
