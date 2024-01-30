import React from "react";
import video from "../../public/assets/bg5.mp4";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hc__content">
          <div className="logo">
            <img src="/assets/logo.png" alt="" />
            <h1>
              Roseton<span>Travel & Tours</span>
            </h1>
          </div>
          <div className="content-txt">
            <h2>
              Time for your next adventure
              <span> Let us plan it for you</span>
            </h2>
          </div>
        </div>
        <div className="video">
          <video src={video} autoPlay loop muted controls />
        </div>
      </div>
    </>
  );
};

export default Home;
