import React from 'react';
import './howler';
import lockFunction from './lockFunction';

class Lock extends React.Component {

    componentDidMount() {
        new lockFunction();
    }

    componentDidUpdate() {
        let isPass = document.querySelector('.isPass').value;

        // Show rose
        if (isPass === 'true') {
            document.querySelector('.rose').style.display = 'block' ;
        }
    }

    render() {
        return (
            <div>
                <div className="lock show-lock">
                    <input type="hidden" className="isPass"/>
                    <div className="screen">
                        <div className="code"> 0000</div>
                        <div className="status">LOCKED</div>
                    </div>
                    <div className="rows">
                        <div className="row">
                            <div className="cell">
                                <div className="text">0</div>
                            </div>
                            <div className="cell">
                                <div className="text">1</div>
                            </div>
                            <div className="cell">
                                <div className="text">2</div>
                            </div>
                            <div className="cell">
                                <div className="text">3</div>
                            </div>
                            <div className="cell">
                                <div className="text">4</div>
                            </div>
                            <div className="cell">
                                <div className="text">5</div>
                            </div>
                            <div className="cell">
                                <div className="text">6</div>
                            </div>
                            <div className="cell">
                                <div className="text">7</div>
                            </div>
                            <div className="cell">
                                <div className="text">8</div>
                            </div>
                            <div className="cell">
                                <div className="text">9</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cell">
                                <div className="text">0</div>
                            </div>
                            <div className="cell">
                                <div className="text">1</div>
                            </div>
                            <div className="cell">
                                <div className="text">2</div>
                            </div>
                            <div className="cell">
                                <div className="text">3</div>
                            </div>
                            <div className="cell">
                                <div className="text">4</div>
                            </div>
                            <div className="cell">
                                <div className="text">5</div>
                            </div>
                            <div className="cell">
                                <div className="text">6</div>
                            </div>
                            <div className="cell">
                                <div className="text">7</div>
                            </div>
                            <div className="cell">
                                <div className="text">8</div>
                            </div>
                            <div className="cell">
                                <div className="text">9</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cell">
                                <div className="text">0</div>
                            </div>
                            <div className="cell">
                                <div className="text">1</div>
                            </div>
                            <div className="cell">
                                <div className="text">2</div>
                            </div>
                            <div className="cell">
                                <div className="text">3</div>
                            </div>
                            <div className="cell">
                                <div className="text">4</div>
                            </div>
                            <div className="cell">
                                <div className="text">5</div>
                            </div>
                            <div className="cell">
                                <div className="text">6</div>
                            </div>
                            <div className="cell">
                                <div className="text">7</div>
                            </div>
                            <div className="cell">
                                <div className="text">8</div>
                            </div>
                            <div className="cell">
                                <div className="text">9</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cell">
                                <div className="text">0</div>
                            </div>
                            <div className="cell">
                                <div className="text">1</div>
                            </div>
                            <div className="cell">
                                <div className="text">2</div>
                            </div>
                            <div className="cell">
                                <div className="text">3</div>
                            </div>
                            <div className="cell">
                                <div className="text">4</div>
                            </div>
                            <div className="cell">
                                <div className="text">5</div>
                            </div>
                            <div className="cell">
                                <div className="text">6</div>
                            </div>
                            <div className="cell">
                                <div className="text">7</div>
                            </div>
                            <div className="cell">
                                <div className="text">8</div>
                            </div>
                            <div className="cell">
                                <div className="text">9</div>
                            </div>
                        </div>
                    </div>
                    <p>Ask capoo for the password</p>
                </div>
            </div>
        )
    }
}

export default Lock;