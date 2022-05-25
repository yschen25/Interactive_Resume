import React from "react";

const Certificate = () => {
  return (
    <div className="certificateBg">
      <h1>Yi-Shiuan Chen</h1>
      <p className="experiences item">
        Enthusiastic <span>software engineer with 4 years’ experiences</span> in
        web development for e-commerce and fintech industry.
        <span>An interviewer and mentor for junior engineers. </span>
        Have experiences on collaboration with people from various countries
        including Dominica government while working for an international
        company.
      </p>
      <ul className="skillList item">
        <li>
          <b>Programming Languages</b>: JavaScript, TypeScript, NodeJS, PHP,
          SQL, CSS, SCSS, SASS
        </li>
        <li>
          <b>Dev Principles</b>: RESTful API, TDD, Agile, SPA
        </li>
        <li>
          <b>Framework</b>: React, Redux, React Hooks
        </li>
        <li>
          <b>Dev Tools</b>: Docker, AWS, Babel, Jest, Enzyme, NPM, Git, Webpack,
          MySQL
        </li>
      </ul>
      <div className="letter-image">
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title"></div>
            <div className="letter-context"></div>
            <div className="letter-stamp">
              <div className="letter-stamp-inner"></div>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className="contactInfo item">
        <a href="https://github.com/yschen25" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/yschen25" target="_blank">
          LinkedIn
        </a>
        <a href="mailto: yschen25@gmail.com">yschen25@gmail.com</a>
      </div>
    </div>
  );
};

export default Certificate;
