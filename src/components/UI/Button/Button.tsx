import * as React from "react";
import { transitionScale } from "../../../transition/transition";

interface IButton {
  text: string;
  color: string;
}

const Button: React.FC<IButton> = ({ text, color }) => {
  let nowColor = "";
  const def = "fw-500 text-[16px] px-[50px] py-[20px] leading-[17px] ";
  const red = "bg-white border-solid border-2 border-customRed hover:bg-customRed hover:text-[#FFF] text-customRed";
  const green = "bg-customGreenLite hover:bg-customGreenDark text-[#FFFFFF]";
  color === "green" ? (nowColor = green) : (nowColor = red);
  return <button className={def + nowColor + transitionScale()}>{text}</button>;
};

export default Button;
