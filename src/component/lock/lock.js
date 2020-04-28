import React from 'react';
import './howler';
import lockFunction from './lockFunction';

class Lock extends React.Component {

    componentDidMount() {
        let lock = new lockFunction();
        let isOpen = lock.open();
        console.log(isOpen);
    }

    render() {
        return (
            <div>
                <div className="lock show-lock">
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
                </div>
            </div>
        )
    }
}

export default Lock;