import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/bw/Speaker-10803.jpg"
        secondaryImg="/static/Speaker-10803.jpg"
        alt="Speaker-10803"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/bw/Speaker-10808.jpg"
        secondaryImg="/static/Speaker-10808.jpg"
        alt="Speaker-10808"
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
