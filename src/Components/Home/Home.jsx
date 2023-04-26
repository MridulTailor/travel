import React from "react";
import "./home.css";
import video from "../../Assets/video.mp4";
const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} type="video/mp4" muted autoPlay loop></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search your holiday</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
