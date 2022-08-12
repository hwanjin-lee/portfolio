import React from "react";
import ExampleProject from "./projects/ExampleProject";
import HannahPermanentMakeup from "./projects/HannahPermanentMakeup";

const Experiences = ({ onComment }) => {
  return (
    <div>
      <HannahPermanentMakeup onComment={onComment} />
      <ExampleProject onComment={onComment} />
    </div>
  );
};

export default Experiences;
