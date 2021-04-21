import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";

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
    <header>
      <div className="container">
        <div className="row">
          <Welcome />
          <TopStories />
        </div>
      </div>
    </header>
  );
};

const Welcome = () => {
  return (
    <section className="col-lg-5">
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
          Let us be your voice. Reachout to millions of people that are waiting
          to go through experiences with you.
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
  );
};

const TopStories = () => {
  return (
    <section className="col-lg-7 mx-auto">
      <HomeNav />
      <div className="row">
        <TopStory />
        <TopStory />
        <TopStory />
        <TopStory />
        <TopStory />
        <TopStory />
        <TopStory />
        <TopStory />
      </div>
    </section>
  );
};

const FeaturedExperiences = () => {
  return (
    <section className="container pb-5">
      <h2 className="my-5 font-weight-bold">Today's featured experiences</h2>
      <div className="row">
        <Experience />
        <Experience />
        <Experience />
        <Experience />
      </div>
    </section>
  );
};

const Topics = () => {
  return (
    <section className="container pb-5">
      <h2 className="my-5 font-weight-bold">Follow Topics</h2>
      <div className="row">
        <Topic />
        <Topic />
        <Topic />
        <Topic />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section className="mt-5 py-4 bg-primary">
      <div className="container d-flex align-items-center justify-content-center text-white">
        <div className="mr-5">#Tuwaaye</div>
        <span>Copyright © 2021. All Rights Reserved</span>
      </div>
    </section>
  );
};

const HomeNav = () => {
  return (
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
  );
};

const TopStory = () => {
  return (
    <div className="col-lg-6">
      <div className="row mb-4 mt-2">
        <div className="col-lg-4">
          <div className="image-prof">
            <Image />
            <p className="numbered bg-purple fw-bold text-white">1</p>
          </div>
        </div>
        <div className="col-lg-8">
          <Title />
          <Author />
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="col-lg-3">
      <div className="mt-4 comm-story light-purple">
        <div className="comm-story-image rounded-3 shadow-sm border">
          <Image />
        </div>
        <Title />
        <div className="d-flex justify-content-between align-items-start">
          <Author />
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

const Topic = () => {
  return (
    <div className="col-lg-3">
      <Image />
      <TopicName />
      <FollowButton />
    </div>
  );
};

const TopicName = () => (
  <h3 className="px-3 py-2 font-weight-bold">
    Fashion <br />& Branding
  </h3>
);

const FollowButton = () => (
  <button className="text-white px-4 font-weight-bold btn btn-primary">
    Follow
  </button>
);

const Image = () => (
  <img
    src="https://intense-reaches-16629.herokuapp.com/assets/joanna-nix-walkup-V9QIep1zZJI-unsplash-213dbfa876f61c0b9cb878406e9dc8f7edd49d0b158b910af8adf223f1dbdd77.jpg"
    alt=""
  />
);

const Title = () => (
  <div>How I managed to handle a cheating Husband for 3 years</div>
);

const Author = () => <small className="text-muted">Anna Rose</small>;

ReactDOM.render(<Tuwaaye />, document.getElementById("root"));
