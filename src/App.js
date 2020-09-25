import React from "react";

import "./App.scss";
import Hero from "./images/myimage.png";
import Logo from "./images/my logo.jpg";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div className="left-half">
          <div className="circle">
            <img src={Logo} className="logo" alt="my-hero" />
          </div>
          <img className="hero-image" src={Hero} alt="my-hero" />
        </div>
        <div className="right-half">
          <h1>Hello, Everyone</h1>
          <h3>I am Nitesh Raut.</h3>
          <h5>Web developer, CS student</h5>
          <p>
            {" "}
            I love coding especially with javascript and python , proficient
            with both frontend and backend development with Django, Django REST,
            Express Node, React js in the frontend but not limited and willing
            to learn new technologies as the time demands.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
