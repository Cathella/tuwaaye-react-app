import React from "react";

const Topic = ({ img, name }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="podcaster mb-4">
        <img src={img} alt="" />
        <h3 className="px-3 py-2 fw-bold color-red light-purple topic-name w-75">
          {name}
        </h3>
        <p className="play fw-bold bg-red text-white px-4 shadow">Follow</p>
      </div>
    </div>
  );
};

export default Topic;
