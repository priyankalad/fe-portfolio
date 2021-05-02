import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Navbar from './Navbar'

export default function Home() {

  function handleClick (){
    window.scrollTo({
      top: 655,
      left: 0,
      behavior: 'smooth'
    });
   
  }



  return (
    <>
    <div className="home">
      <h1 className="home__desc">
        Hello, I'm <span className="home__desc--name">Ashfaq Ahmed</span>.
      </h1>
      <h1 className="home__desc">I'm a frond-end web Developer</h1>
      <button id="hme_btn" className="home__btn" onClick={handleClick} >
        View my work <i className="fa fa-arrow-right fa-1x "></i>
      </button>
    </div>

   

    </>
  );
}
