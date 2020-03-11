import React from 'react';
import {connect} from 'react-redux';
import {changeStatus, submit} from "../../action";

class ConnectDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textInput: ''};
        this.changeText = this.changeText.bind(this);
        this.submit = this.submit.bind(this);
    }

    changeStatus(e) {

        let data_name = e.target.getAttribute('data-name');
        let name = data_name.split('-')[1];

        console.log('display.js / close', name);

        const {dispatchChangeStatus} = this.props;

        // Close popup
        dispatchChangeStatus({
            name,
            show: false
        });

        this.setState({textInput: ''});
    }

    changeText(e) {
        this.setState({textInput: e.target.value});
    }

    submit(e) {

        e.preventDefault();

        let inputValue = parseInt(this.state.textInput.trim());

        if (inputValue === 418) {
            const {dispatchSubmit} = this.props;
            dispatchSubmit({
                name : 'youtube',
                show : true
            });

            dispatchSubmit({
                name : 'pwd',
                show : false
            });

        } else {
            alert('You enter the wrong password, see the tip.');
        }
    }

    render() {

        const { data } = this.props;

        console.log('data', data);

        return Object.entries(data.clicked).map((val) => {

            console.log('display.js/', val);

            let mask = '';
            let display = '';
            let pwdDisplay = '';
            let tabDisplay = '';
            let youtubeDisplay = '';
            if (val[1].show) {

                // Display other objects
                display = <div className={`show show-${val[0]}`} data-name={`show-${val[0]}`} onClick={this.changeStatus.bind(this)}></div>;

                if (val[0] === 'computer' && val[1].show) {

                    Object.entries(data.tab).map((val) => {

                        // Password tab
                        if(val[0] === 'pwd' && val[1].show){
                            pwdDisplay = <div className="pwdTab">
                                <form autoComplete="off">
                                    <div className="pwdInput">
                                        <input className="textInput" name="textInput" autoFocus
                                               placeholder="Please enter the password"
                                               value={this.state.textInput} onChange={this.changeText}/>
                                        <p>Tip : I am a teapot</p>
                                        <input className="submitInput" type='submit' value='Submit' onClick={this.submit}/>
                                    </div>
                                </form>
                            </div>
                        }

                        // Youtube tab
                        if (val[0] === 'youtube' && val[1].show) {

                            tabDisplay = <div><div className="trigger youtubeTrigger">YouTube</div>
                                <div className="trigger portfolioTrigger">Portfolio</div></div>;

                            youtubeDisplay = <div className="tab youtubeTab">
                                <div className="youtubeBg">
                                    <iframe width="490" height="260" src="https://www.youtube.com/embed/t3v25rt-DYA"
                                            frameBorder="0"></iframe>
                                </div>
                            </div>
                        }
                    });

                    {/*<div className="tab portfolioTab">*/}
                    {/*<iframe width="736" height="410" src="http://www.yschen25.com/portfolio/pizzaMaker/" />*/}
                    {/*</div>*/}

                    display = <div className='show show-computer' data-name='show-computer'>
                        {pwdDisplay}
                        {tabDisplay}
                        {youtubeDisplay}
                    </div>;
                }

                mask = <div className="mask " data-name={`show-${val[0]}`} onClick={this.changeStatus.bind(this)}></div>;
            }

            return (
                <div key={`show-${val[0]}`}>
                    {mask}
                    {display}
                </div>
            )
        })
    }
}

ConnectDisplay.defaultProps = {
    clicked: {}
};

const mapStateToProps = state => {
    return {
        data: state.room
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchChangeStatus: selected => {
            dispatch(changeStatus(selected))
        },
        dispatchSubmit: value => {
            dispatch(submit(value))
        }
    }
};

export const Display = connect(mapStateToProps, mapDispatchToProps)(ConnectDisplay);