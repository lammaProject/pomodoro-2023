import * as React from "react";
import { transitionScale } from "../../../transition/transition";

const AddButton: React.FC<any> = () => {
  return (
    <button className={"bg-customGray hover:bg-customGreenDark p-[17px] rounded-full" + transitionScale()}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.27559 9.13215V16H6.72441V9.13215H0V6.70291H6.72441V0H9.27559V6.70291H16V9.13215H9.27559Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default AddButton;
