import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Work = ({ work }) => {
  const { image } = work;
  console.log(work);
  return (
    <div>
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <div className="foo">
          <PhotoView src={image}>
            <img src={image} alt="" />
          </PhotoView>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Work;
