import React from 'react';

class Certificate extends React.Component {
    render() {
        return (
            <div className="certificateBg">
                <h1>Yi-Shian Chen</h1>
                <ul className="experiences item">
                    <li>3 years experiences in front-end and back-end</li>
                    <li>Spearhead building new official website twice</li>
                    <li>Volunteer to hold technical training programs and write documents</li>
                    <li>Excellent communication skills and logic by being freelancer and taking business trip</li>
                    <li>Got best website design and RWD website reward in class</li>
                </ul>
                <div className="skillList item">
                    <p><b>Front-End</b> : React.js, Redux, Axios, JavaScript, ES6, Styled Component, jQuery, Babel,
                        ESlint, Jest</p>
                    <p>Back-End : PHP, RESTful API, PHPUnit, MySQL, Phalcon</p>
                    <p>Others : PhpStorm, Sublime, Photoshop, Illustrator, SonarQube, Docker, Web Design, UI/UX Design,
                        Agile, SEO</p>
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