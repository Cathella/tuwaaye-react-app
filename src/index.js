import React from "react";
import ReactDOM from "react-dom";

function Tuwaaye() {
  return (
    <div>
      <Welcome />
      <TopStories />
      <FeaturedExperiences />
      <Topics />
      <Footer />
    </div>
  );
}

const Welcome = () => {
  return (
    <section>
      <h1>Share your experiences with the world</h1>
      <p>
        Let us be your voice. Reachout to millions of people that are waiting to
        go through experiences with you.
      </p>
      <a href="#">Join our community</a>
      <a href="#">Login</a>
    </section>
  );
};

const TopStories = () => {
  return (
    <section>
      <HomeNav />
      <div>
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
    <section>
      <h2>Today's featured experiences</h2>
      <div>
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
    <section>
      <h2>Follow Topics</h2>
      <div>
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
    <section>
      <a href="#">Tuwaaye</a>
      <span>Copyright © 2021. All Rights Reserved</span>
    </section>
  );
};

const HomeNav = () => {
  return (
    <nav>
      <a href="#">Tuwaaye</a>
      <span>Top Stories</span>
    </nav>
  );
};

const TopStory = () => {
  return (
    <div>
      <p>How I managed to handle a cheating Husband for 3 years</p>
      <p>Namusisi Hannah</p>
    </div>
  );
};

const Experience = () => {
  return (
    <section>
      <p>
        I have lived to see my mother make it out of depression. It was sad
        seeing her cry every day that went.
      </p>
      <p>Nahirya Briannah</p>
    </section>
  );
};

const Topic = () => {
  return (
    <div>
      <h3>Family</h3>
      <button>Follow</button>
    </div>
  );
};

ReactDOM.render(<Tuwaaye />, document.getElementById("root"));
