import React from "react";
import ExampleProject from "./projects/ExampleProject";
import HannahPermanentMakeup from "./projects/HannahPermanentMakeup";
import VisualEffects from "./projects/VisualEffects";

const Experiences = ({ onComment }) => {
  return (
    <div>
      <HannahPermanentMakeup onComment={onComment} />
      <VisualEffects onComment={onComment} />
      {/* <ExampleProject onComment={onComment} /> */}
    </div>
  );
};

export default Experiences;
