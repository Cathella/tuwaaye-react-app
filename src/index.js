import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";

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
    <section className="col-lg-5 bg-info p-5">
      <h1 className="mt-4 mb-5 text-white font-weight-bold">
        Share your experiences with the world
      </h1>
      <p className="text-white">
        Let us be your voice. Reachout to millions of people that are waiting to
        go through experiences with you.
      </p>
      <div className="mt-5">
        <a
          href="#"
          className="text-center d-block shadow text-white font-weight-bold shadow bg-primary py-3 rounded"
        >
          Join our community
        </a>
        <a
          href="#"
          className="mt-3 d-block text-white border text-center py-3 font-weight-bold rounded"
        >
          Login
        </a>
      </div>
    </section>
  );
};

const TopStories = () => {
  return (
    <section className="col-lg-6 mx-auto">
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
    <section className="container">
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
    <section className="container">
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
      <a href="#" className="font-weight-bold">
        #Tuwaaye
      </a>
      <span className="mx-5 font-weight-bold bg-primary text-white px-4 rounded">
        Top Stories
      </span>
    </nav>
  );
};

const TopStory = () => {
  return (
    <div className="col-lg-6">
      <div className="row mb-4">
        <div className="col-lg-3">Image</div>
        <div className="col-lg-9">
          <p>How I managed to handle a cheating Husband for 3 years</p>
          <p>Namusisi Hannah</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="col-lg-3">
      <div className="mt-4">
        <div className="bg-light rounded shadow mb-4">Image</div>
        <div className="d-flex justify-content-between align-items-start">
          <p className="text-center">
            I have lived to see my mother make it out of depression. It was sad
            seeing her cry every day that went.
          </p>
          <div className="line"></div>
        </div>
        <p className="text-center">Nahirya Briannah</p>
      </div>
    </section>
  );
};

const Topic = () => {
  return (
    <div className="col-lg-3">
      <div>Image</div>
      <h3 className="px-3 py-2 font-weight-bold">
        Fashion <br />& Branding
      </h3>
      <button className="text-white px-4 font-weight-bold btn btn-primary">
        Follow
      </button>
    </div>
  );
};

ReactDOM.render(<Tuwaaye />, document.getElementById("root"));
