import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { topics } from "./topics";
import { experiences } from "./experiences";
import { stories } from "./stories";
import TopStory from "./TopStory";
import Experience from "./Experience";
import Topic from "./Topic";

function Tuwaaye() {
  return (
    <div>
      <Header />
      <FeaturedExperiences />
      <Topics />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="light-purple">
      <div className="container">
        <div className="row">
          <section className="col-lg-6 col-xl-5">
            <div className="signup-section">
              <div className="logo mb-5 d-lg-none d-md-block">
                <a href="/" className="color-purple logo">
                  #Tuwaaye
                </a>
              </div>

              <h1 className="mt-4 mb-5 font-weight-bold">
                Share Your Experiences with the World
              </h1>

              <p className="d-none d-lg-block">
                Let us be your voice. Reachout to millions of people that are
                waiting to go through experiences with you.
              </p>

              <div className="mt-5">
                <a
                  href="#"
                  className="text-center d-block shadow text-white font-weight-bold shadow bg-purple py-3 rounded-pill"
                >
                  Join our community
                </a>
                <a
                  href="#"
                  className="mt-3 d-block text-white border text-center py-3 font-weight-bold rounded-pill"
                >
                  Login
                </a>
              </div>
            </div>
          </section>

          <TopStories />
        </div>
      </div>
    </header>
  );
};

const TopStories = () => {
  return (
    <section className="col-lg-5 col-xl-7 mx-auto">
      <nav className="d-flex my-5 align-items-center justify-content-between">
        <div className="logo d-none d-lg-block">
          <a href="#" className="fs-3 deep-purple">
            #Tuwaaye
          </a>
        </div>
        <span className="font-weight-bold rounded bg-red text-white px-4 rounded">
          Top Stories
        </span>
      </nav>

      <div className="row">
        {stories.map((story, index) => {
          return <TopStory key={story.id} {...story}></TopStory>;
        })}
      </div>
    </section>
  );
};

const FeaturedExperiences = () => {
  return (
    <section className="container pb-5">
      <h2 className="my-5 font-weight-bold pt-5">
        Today's Featured Experiences
      </h2>
      <div className="row">
        {experiences.map((experience, index) => {
          return <Experience key={experience.id} {...experience}></Experience>;
        })}
      </div>
    </section>
  );
};

const Topics = () => {
  return (
    <section className="container pb-5">
      <h2 className="my-5 font-weight-bold">Follow Topics</h2>
      <div className="row">
        {topics.map((topic, index) => {
          return <Topic key={topic.id} {...topic}></Topic>;
        })}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section className="mt-5 py-4 bg-deep-purple">
      <div className="container d-flex align-items-center justify-content-center text-white">
        <div className="mr-5 logo">#Tuwaaye</div>
        <span>Copyright © 2021. All Rights Reserved</span>
      </div>
    </section>
  );
};

ReactDOM.render(<Tuwaaye />, document.getElementById("root"));
