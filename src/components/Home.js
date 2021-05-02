import React from "react";
import "font-awesome/css/font-awesome.min.css"


export default function Home() {

  

  function handleClick() {
    // window.scrollTo({
    //   top: 655,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    window.scrollTo(document.getElementById('abt_sec').getBoundingClientRect())

  }



  return (
    <>


      <div className="home">
        <div className="left">
          <h1 className="home__desc">
            <p>Hello,</p>
            <p>I'm <span className="home__desc--name">Ashfaq Ahmed</span>.</p>
          </h1>
          <h1 className="home__desc">frond-end web Developer</h1>
          <button id="hme_btn" className="home__btn" onClick={handleClick} >
            View my work <i className="fa fa-arrow-right fa-1x "></i>
          </button>
        </div>


        <div className="right"></div>

      </div>





    </>
  );
}
