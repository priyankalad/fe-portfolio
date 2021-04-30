import React from "react";
import "font-awesome/css/font-awesome.min.css";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home__desc">
        Hello, I'm <span className="home__desc--name">Priyanka Lad</span>.
      </h1>
      <h1 className="home__desc">I'm a frond-end web Developer</h1>
      <button className="home__btn">
        View my work <i className="fa fa-arrow-right fa-1x "></i>
      </button>
    </div>
  );
}
