import React from "react";

type Props = {};

const Home = (props: Props) => {

  return (
    <section className="page home">
      <div className="container">
        <div className="home-content">
          <h1 className="ff-sans-cond uppercase fs-500 fw-normal text-accent letter-spacing-1">
            So, you want to travel to <span className="ff-serif fs-900 fw-normal text-white">Space</span>
          </h1>
          <p className="ff-sans-normal fs-400 line-height text-accent">
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world
            experience!
          </p>
        </div>
        <div style={{"marginTop": "5rem"}}>
          <a href="#" className="uppercase ff-serif fs-600 text-dark bg-white large-button">Explore</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
