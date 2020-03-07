import React from 'react';
import ReactDOM from 'react-dom';
import pic2 from '../../img/pic12.png';
import Wall from '../wall/wall';
import Desk from '../desk/desk';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = { mask: 'noShow' };
        this.checkPic = this.checkPic.bind(this);
    }

    checkPic(){
        console.log("ddd");
        this.setState({ mask : 'show' });
    }


    render() {
        return (
            <div>
                {(this.state.mask) == 'show' ? <div className="mask"></div> : "" }
                {(this.state.mask) == 'show' ? <img className="showPic" src={pic2} /> : ""}
            <div className="wrapper">
                <Wall checkPic={this.checkPic}/>
                <Desk />
                <p className="text">For the best experience, recommend use 1920×1080 pixels</p>
                <p className="text ref"><a href="https://www.freepik.com/" target="_blank">Photo created by freepik - www.freepik.com</a></p>
            </div>
            </div>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById('app'));
