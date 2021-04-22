import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";

// setup vars
const topics = [
  {
    id: 1,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/joanna-nix-walkup-V9QIep1zZJI-unsplash-ba642da3f466d5b8f6a472d955a5d4c7c9f3d175a9c7d752acf3440acae00234.jpg",
    name: "Fashion & Branding",
  },

  {
    id: 2,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/joanna-nix-walkup-H4fEMshfwTE-unsplash-51876325fb3e2354344a49c6215fa97c4b3fe347035891b09d8ab34d215fbb8b.jpg",
    name: "Religion & Politics",
  },

  {
    id: 3,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/melody-jacob-zIviddKCNkc-unsplash-748e94572fed559414b7ad832d76d4241220cfcc7d973520fea3709e8f26e070.jpg",
    name: "Startups & Jobs",
  },

  {
    id: 4,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/audrey-m-jackson-cAFpd2vqnPE-unsplash-6e054455f0dbb703692f0ed5509c246fb4284c7c67d99a893e1026489f903c07.jpg",
    name: "LifeStyle & Family",
  },
];

const experiences = [
  {
    id: 1,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/audrey-m-jackson-cAFpd2vqnPE-unsplash-6e054455f0dbb703692f0ed5509c246fb4284c7c67d99a893e1026489f903c07.jpg",
    title:
      "I have lived to see my mother make it out of depression. It was sad seeing her cry every day that went.",
    author: "Nahirya Briannah",
  },

  {
    id: 2,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/joanna-nix-walkup-V9QIep1zZJI-unsplash-ba642da3f466d5b8f6a472d955a5d4c7c9f3d175a9c7d752acf3440acae00234.jpg",
    title:
      "The day I lost my job, was the hardest time I had to go through to look after my family - it was very sad.",
    author: "Lydiah Elliotess",
  },

  {
    id: 3,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/matheus-ferrero-rbAmkRXqjn8-unsplash-a34fa99b553b37db320dc9ec9ebe03d2fcff61dea37a844a328b286bde60b5cd.jpg",
    title:
      "Nobody believed when I finally told them that I was raped. I was going to become a depressed mother.",
    author: "Grace Kakembo",
  },

  {
    id: 4,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/joanna-nix-walkup-H4fEMshfwTE-unsplash-51876325fb3e2354344a49c6215fa97c4b3fe347035891b09d8ab34d215fbb8b.jpg",
    title:
      "Mum left while I was still young, but thanks to dad, I have never in my life regretted growing up without her.",
    author: "Josephine Mukasa",
  },
];

const stories = [
  {
    id: 1,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/audrey-m-jackson-cAFpd2vqnPE-unsplash-6e054455f0dbb703692f0ed5509c246fb4284c7c67d99a893e1026489f903c07.jpg",
    title: "How I managed to handle a cheating Husband for 3 years.",
    author: "Namusisi Hannah",
  },

  {
    id: 2,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/joanna-nix-walkup-V9QIep1zZJI-unsplash-ba642da3f466d5b8f6a472d955a5d4c7c9f3d175a9c7d752acf3440acae00234.jpg",
    title: "How I started out my fashion house from Owino - downtown",
    author: "Anna Rose",
  },

  {
    id: 3,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/matheus-ferrero-rbAmkRXqjn8-unsplash-a34fa99b553b37db320dc9ec9ebe03d2fcff61dea37a844a328b286bde60b5cd.jpg",
    title: "My family's pressures on getting married.",
    author: "Jenny Kinconco",
  },

  {
    id: 4,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/joanna-nix-walkup-H4fEMshfwTE-unsplash-51876325fb3e2354344a49c6215fa97c4b3fe347035891b09d8ab34d215fbb8b.jpg",
    title: "Buying a car in this covid19 period.",
    author: "Mary Cathy",
  },

  {
    id: 5,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/cdc-65_nbwiD3I4-unsplash-2d7301633ebab1ee6cff1ddd9112a38098539da2ed5100d7f4ae90382b1d7709.jpg",
    title: "Being smart makes you approachable - my fav shopping places.",
    author: "Nabukenya Julie",
  },

  {
    id: 6,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/joanna-nix-walkup-V9QIep1zZJI-unsplash-ba642da3f466d5b8f6a472d955a5d4c7c9f3d175a9c7d752acf3440acae00234.jpg",
    title: "How I managed to handle a cheating Husband for 3 years.",
    author: "Namusisi Jane",
  },

  {
    id: 7,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/matheus-ferrero-rbAmkRXqjn8-unsplash-a34fa99b553b37db320dc9ec9ebe03d2fcff61dea37a844a328b286bde60b5cd.jpg",
    title: "My dream job loading... How I got it",
    author: "Kabuye Timo",
  },
  {
    id: 8,
    img:
      "https://intense-reaches-16629.herokuapp.com/assets/audrey-m-jackson-cAFpd2vqnPE-unsplash-6e054455f0dbb703692f0ed5509c246fb4284c7c67d99a893e1026489f903c07.jpg",
    title: "However challenging it was, I made it to Graduation.",
    author: "Martina Kalembe",
  },
];

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
          <Welcome />
          <TopStories />
        </div>
      </div>
    </header>
  );
};

const Welcome = () => {
  return (
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

const TopStories = () => {
  return (
    <section className="col-lg-5 col-xl-7 mx-auto">
      <HomeNav />
      <div className="row">
        {stories.map((story, index) => {
          return <TopStory key={story.id} {...story}></TopStory>;
        })}
      </div>
    </section>
  );
};

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

const Topic = ({ img, name }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="podcaster mb-4">
        <img src={img} alt="" />
        <h3 className="px-3 py-2 fw-bold color-red light-purple topic-name w-75">
          {name}
        </h3>
        <FollowButton />
      </div>
    </div>
  );
};

const FollowButton = () => (
  <p className="play fw-bold bg-red text-white px-4 shadow">Follow</p>
);

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
