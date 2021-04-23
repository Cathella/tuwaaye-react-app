import React from "react";
import { useState } from "react";

const Topic = ({ img, name }) => {
  const [text, setText] = useState("Follow");
  const handleClick = () => {
    if (text === "Follow") {
      setText("Followed");
    } else {
      setText("Follow");
    }
  };

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="podcaster mb-4">
        <img src={img} alt="" />
        <h3 className="px-3 py-2 fw-bold color-red light-purple topic-name w-75">
          {name}
        </h3>
        <p
          className="play font-weight-bold bg-red text-white px-4 shadow"
          onClick={handleClick}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Topic;
