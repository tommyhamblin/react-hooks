import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[10803, 10808].map((speakerId) => {
        return (
          <div key={speakerId}>
            <ImageToggleOnScroll
              primaryImg={`/static/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/Speaker-${speakerId}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
