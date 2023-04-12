import React from "react";
import "..//src/Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container1">
        <div className="hero-main">
          <h1>Get mentored by your Career Twins.</h1>
          <p>
            Interact your peers who have achieved what you aspire to pursue and
            are just a step ahead of you.
          </p>
          <button
            onClick={() => {
              navigate("/Booking");
            }}
          >
            start your Journey
          </button>
        </div>
        <div className="side-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAr5f8sCDuGdMrjNDcd0IUytGOQiDD9JTosX79R0ynZLic6g8s"></img>{" "}
        </div>
      </div>
    </>
  );
}

export default Home;
