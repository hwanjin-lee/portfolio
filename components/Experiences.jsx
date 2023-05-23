import React, { useState } from "react";
import ExampleProject from "./projects/ExampleProject";
import NextjsProject from "./projects/NextjsProject";
import VisualEffects from "./projects/VisualEffects";
import Hydrocard from "./Hydrocard";

const Experiences = ({ onComment }) => {
  return (
    <div>
      <Hydrocard onComment={onComment} />
      <NextjsProject onComment={onComment} />
      <VisualEffects onComment={onComment} />
      {/* <ExampleProject onComment={onComment} /> */}
    </div>
  );
};

export default Experiences;
