import React from 'react';

class Certificate extends React.Component {
    render() {
        return (
            <div className="certificateBg">
                <h1>Yi-Shiuan Chen</h1>
                <ul className="experiences item">
                    <li><span>3 years experiences</span> in front-end and back-end</li>
                    <li><span>Spearhead team</span> to develop new official website twice</li>
                    <li>Volunteer to <span>held technical training programs and write documents</span></li>
                    <li>Excellent <span>communication skills and logic</span> by being freelancer and taking business trip</li>
                    <li>Got <span>best website design and RWD website reward</span> in class</li>
                </ul>
                <div className="skillList item">
                    <p><b>Front-End</b> : HTML, CSS, Flexbox, RWD, SCSS, SASS, Bootstrap, React.js, Redux,
                        Axios, JavaScript, ES6, Styled Component, jQuery, Babel, ESlint, Jest, SPA</p>
                    <p><b>Back-End</b> : PHP, RESTful API, PHPUnit, Phalcon, Blitz, MySQL </p>
                    <p><b>Others</b> : Git, Webpack, NPM, Docker, PhpStorm, Sublime, Photoshop, Illustrator,
                        SonarQube, Docker, Web Design, UI/UX Design, Agile, SEO</p>
                </div>
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
                    <a href="https://github.com/yschen25" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/yschen25" target="_blank">LinkedIn</a>
                    <a href="mailto: yschen25@gmail.com">yschen25@gmail.com</a>
                </div>
            </div>
        )
    }
}

export default Certificate;