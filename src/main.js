import './css/normalize.css';
import './scss/main.scss';
import './scss/mobile.scss';
import './component/main/main';
import { isMobile } from 'react-device-detect';

// Direct to another resume if the device is mobile
if (isMobile) {
    window.location = 'https://www.yschen25.com/';
}

// Add source reference
// Add device recommendation