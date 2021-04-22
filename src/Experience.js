import React from "react";

const Experience = ({ img, title, author }) => {
  return (
    <section className="col-md-6 col-lg-4 col-xl-3">
      <div className="my-4 comm-story light-purple">
        <div className="comm-story-image rounded shadow-sm border">
          <img src={img} alt="" />
        </div>
        <div className="text-center comm-story-p">
          <div>{title}</div>
        </div>
        <div className="d-flex justify-content-between align-items-start">
          <p className="comm-story-auth deep-purple">{author}</p>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
