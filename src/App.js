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
          <h1 align="center">Hi 👋, I'm Nitesh Raut</h1>
          <h3 align="center">A CS student.</h3>
          <p align="left">
            {" "}
            <img
              src="https://komarev.com/ghpvc/?username=rautnitesh"
              alt="rautnitesh"
            />{" "}
          </p>
          - 📫 How to reach me <a href="mailto:rautesh6@gmail.com">Here</a> - ⚡
          Fun fact I love tea.
          <p>What I am good at.</p>
          <p align="left">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg"
              alt="bootstrap"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/django/django-original.svg"
              alt="django"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/express/express-original-wordmark.svg"
              alt="express"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg"
              alt="gatsby"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"
              alt="illustrator"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/photoshop/photoshop-plain.svg"
              alt="photoshop"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg"
              alt="python"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://reactnative.dev/img/header_logo.svg"
              alt="reactnative"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg"
              alt="redux"
              width="40"
              height="40"
            />{" "}
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />
          </p>
          <p>
            <img
              align="left"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=rautnitesh&layout=compact"
              alt="rautnitesh"
            />
          </p>
          <p>
            &nbsp;
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=rautnitesh&show_icons=true"
              alt="rautnitesh"
            />
          </p>
          <div className="social-links">
            <p align="center">
              <a href="https://linkedin.com/in/rautesh" target="blank">
                <img
                  align="center"
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                  alt="rautesh"
                  height="30"
                  width="30"
                />
              </a>
              <a href="https://fb.com/metheraut" target="blank">
                <img
                  align="center"
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
                  alt="metheraut"
                  height="30"
                  width="30"
                />
              </a>
              <a href="https://instagram.com/metheraut" target="blank">
                <img
                  align="center"
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                  alt="metheraut"
                  height="30"
                  width="30"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
