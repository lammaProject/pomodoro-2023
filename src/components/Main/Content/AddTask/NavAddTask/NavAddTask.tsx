import * as React from "react";
import Button from "../../../../UI/Button/Button";

const NavAddTask: React.FC<any> = () => {
  return (
    <div>
      <input
        className="py-3 mb-[25px] fw-300 text-customBlack text-[16px] leading-[17px] bg-customGrayLite w-[370px] px-4 block focus:outline-none"
        placeholder="Название задачи"
      />

      <Button text="Добавить" color="green" />
    </div>
  );
};

export default NavAddTask;
