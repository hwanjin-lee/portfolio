import React from "react";
import BeginningStory from "./blogs/BeginningStory";
import HydrocardStory from "./blogs/HydrocardStory";

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
