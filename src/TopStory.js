import React from "react";

const TopStory = ({ img, title, author, id }) => {
  return (
    <div className="col-md-6 col-lg-11 col-xl-6">
      <div className="row mb-4 mt-2">
        <div className="mb-3 col-3 col-sm-3 col-md-4 col-lg-4">
          <div className="image-prof">
            <img src={img} alt="" />
            <p className="numbered bg-purple fw-bold text-white">{id}</p>
          </div>
        </div>
        <div className="col-sm-8 col-md-10 col-lg-8">
          <div className="mb-2">{title}</div>
          <span className="text-muted">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default TopStory;
