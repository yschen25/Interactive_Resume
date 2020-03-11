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

    }

    changeText(e) {
        this.setState({textInput: e.target.value});
    }

    submit(e) {

        e.preventDefault();

        console.log('Submit!');

        let inputValue = parseInt(this.state.textInput.trim());

        if (inputValue === 148) {
            console.log('SUCCESS');
            const {dispatchSubmit} = this.props;

            dispatchSubmit({
                name,
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
            if (val[1].show) {

                // Display other objects
                display = <div className={`show show-${val[0]}`} data-name={`show-${val[0]}`} onClick={this.changeStatus.bind(this)}></div>;

                if (val[0] === 'computer') {
                    console.log('COMPUTER');

                    display = <div className='show show-computer' data-name='show-computer'>
                        <div className="pwdTab">
                            <form>
                                <div className="pwdInput">
                                    <input className="textInput" name="textInput" autoFocus
                                           placeholder="Please enter the password"
                                           value={this.state.textInput} onChange={this.changeText}/>
                                    <p>Tip : I am a teapot</p>
                                    <input className="submitInput" type='submit' value='Submit' onClick={this.submit}/>
                                </div>
                            </form>
                        </div>

                    {/*{Object.entries(data.tab).map((val) => {*/}

                        {/*console.log('VAL!!!!!!', val);*/}
                        {/*if(val[0] === 'youtube' && val[1]){*/}
                            {/*<div className="trigger youtubeTrigger">YouTube</div>*/}
                            {/*<div className="trigger portfolioTrigger">Portfolio</div>*/}

                            {/*<div className="tab youtubeTab">*/}
                            {/*<div className="youtubeBg">*/}
                            {/*<iframe width="490" height="260" src="https://www.youtube.com/embed/t3v25rt-DYA" frameBorder="0"></iframe>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                        }

                    {/*<div className="tab portfolioTab">*/}
                    {/*<iframe width="736" height="410" src="https://www.yschen25.com/" />*/}
                    {/*</div>*/}

                        {/*})}*/}
                    </div>;
                }

                mask = <div className="mask" data-name={`show-${val[0]}`} onClick={this.changeStatus.bind(this)}></div>;
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