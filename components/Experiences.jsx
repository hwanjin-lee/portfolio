import React from "react";
import ExampleProject from "./projects/ExampleProject";
import NextjsProject from "./projects/NextjsProject";
import VisualEffects from "./projects/VisualEffects";

const Experiences = ({ onComment }) => {
  return (
    <div>
      <VisualEffects onComment={onComment} />
      <NextjsProject onComment={onComment} />
      {/* <ExampleProject onComment={onComment} /> */}
    </div>
  );
};

export default Experiences;
