import React from "react";
import ThreeCardHead from "./ThreeCardHead";
import ThreeCardOnly from "./ThreeCardOnly";

const ThreeCard = () => {
  return (
    <div>
      <ThreeCardHead />
      <div className="">
        <ThreeCardOnly />
      </div>
    </div>
  );
};

export default ThreeCard;
