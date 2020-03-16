import './css/normalize.css';
import './scss/main.scss';
import { isMobile } from 'react-device-detect';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Room } from './component/main/main';

// Direct to another resume if the device is mobile
if (isMobile) {
    window.location = 'https://www.yschen25.com/';
}

ReactDOM.render(<Provider store={store}><Room /></Provider>, document.getElementById('app'));