import React from "react";
import BeginningStory from "./blogs/beginningStory";
import HydrocardStory from "./blogs/hydrocardStory";

const Blog = ({ onComment }) => {
  return (
    <div>
      <div id="about"></div>
      <HydrocardStory onComment={onComment} />
      <BeginningStory onComment={onComment} />
    </div>
  );
};

export default Blog;
