import React from 'react';
import InlineSVG from 'svg-inline-react';
import {changeStatus, changeRoseStatus} from "../../action";
import {connect} from "react-redux";
import bloomingRose from '../../img/blooming_rose.png';
import witheringRose from '../../img/withering_rose.png';

class ConnectRose extends React.Component {

    componentDidMount(){

        if (document.getElementById("option_coffee") !== null) document.getElementById("option_coffee").addEventListener("click", makeRosebloom);
        if (document.getElementById("option_water") !== null) document.getElementById("option_water").addEventListener("click", makeRoseWither);

        const {dispatchChangeRoseStatus} = this.props;

        function makeRosebloom() {

            setTimeout(function () {
                for (let i = 0; i <= 14; i++) {
                    if (document.getElementById(`animate${i}`) !== null) document.getElementById(`animate${i}`).beginElement();
                }
            }, 300);

            dispatchChangeRoseStatus({
                name: 'blooming',
                show: true
            });

            dispatchChangeRoseStatus({
                name: 'withering',
                show: false
            });

            document.getElementById("rose").src = bloomingRose;
        }

        function makeRoseWither() {

            dispatchChangeRoseStatus({
                name: 'withering',
                show: true
            });

            dispatchChangeRoseStatus({
                name: 'blooming',
                show: false
            });

            document.getElementById("rose").src = witheringRose;
        }
    }

    render() {

        let svgSource = '';
        const {data} = this.props;
        Object.entries(data.rose).map((val) => {

            if (val[0] === 'withering' && val[1].show) {
                svgSource = `<svg class="rose_svg withering" viewBox="0 0 188 261">
                                <defs>
                                    <radialgradient id="gradient-0" gradientUnits="userSpaceOnUse" cx="-107.308" cy="104.329"
                                                    r="59.181"
                                                    gradientTransform="matrix(0.261752, 0.411262, -0.686293, 0.596934, 160.094667, 49.38985)">
                                        <stop offset="0" style="stop-color: rgb(52, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(79,23,23);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-1" gradientUnits="userSpaceOnUse" cx="113.342" cy="62.644"
                                                    r="53.882"
                                                    gradientTransform="matrix(-0.169507, 1.182475, -0.714039, -0.308382, 160.212434, -46.522622)">
                                        <stop offset="0" style="stop-color: rgb(52, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(79,23,23);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-4" gradientUnits="userSpaceOnUse" cx="127.727" cy="116.674"
                                                    r="45.581"
                                                    gradientTransform="matrix(-0.468422, -1.651974, 0.962071, -0.272798, 74.446964, 391.898588)">
                                        <stop offset="0" style="stop-color: rgb(52, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(64,19,19);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-6" gradientUnits="userSpaceOnUse" cx="43.926" cy="85.895"
                                                    r="44.319"
                                                    gradientTransform="matrix(1.145876, -0.154456, 0.133585, 0.991037, 18.521778, 10.448842)">
                                        <stop offset="0" style="stop-color: rgb(56, 16, 16);"></stop>
                                        <stop offset="1" style="stop-color: rgb(52, 0, 0);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-7" gradientUnits="userSpaceOnUse" cx="70.257" cy="63.907"
                                                    r="38.537"
                                                    gradientTransform="matrix(-0.480251, 0.463812, -0.694689, -0.719311, 216.251059, 74.926092)">
                                        <stop offset="0" style="stop-color: rgb(52, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(79,23,23);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-8" gradientUnits="userSpaceOnUse" cx="99.231" cy="116.778"
                                                    r="19.209"
                                                    gradientTransform="matrix(0.18829, -1.009689, 0.983052, 0.183324, -48.104751, 172.536193)">
                                        <stop offset="0" style="stop-color: rgb(51, 13, 13);"></stop>
                                        <stop offset="1" style="stop-color: rgb(52, 0, 0);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-9" gradientUnits="userSpaceOnUse" cx="77.314" cy="119.309"
                                                    r="20.726"
                                                    gradientTransform="matrix(-1.623871, -1.229366, 0.603596, -0.79729, 122.245012, 298.564429)">
                                        <stop offset="0" style="stop-color: rgb(60,28,28);"></stop>
                                        <stop offset="1" style="stop-color: rgb(52, 0, 0);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-10" gradientUnits="userSpaceOnUse" cx="91.275" cy="115.836"
                                                    r="34.163">
                                        <stop offset="0" style="stop-color: rgb(52, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(65,20,20);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-11" gradientUnits="userSpaceOnUse" cx="87.793" cy="121.847"
                                                    r="7.864"
                                                    gradientTransform="matrix(-0.305698, -2.998266, 0.994843, -0.101432, -6.587452, 397.432981)">
                                        <stop offset="0" style="stop-color: rgb(52, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(95, 30, 30);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-12" gradientUnits="userSpaceOnUse" cx="77.806" cy="136.077"
                                                    r="46.618"
                                                    gradientTransform="matrix(1.007103, 0, 0, 1.028773, 3.509742, -3.183751)">
                                        <stop offset="0" style="stop-color: rgb(52, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(79,23,23);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-13" gradientUnits="userSpaceOnUse" cx="34.864" cy="119.976"
                                                    r="36.699"
                                                    gradientTransform="matrix(-0.483999, -0.503131, 0.29077, -1.102951, 30.968876, 262.661348)">
                                        <stop offset="0" style="stop-color: rgb(31,64,4);"></stop>
                                        <stop offset="1" style="stop-color: rgb(25,52,8);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-14" gradientUnits="userSpaceOnUse" cx="41.572" cy="155.958"
                                                    r="37.322"
                                                    gradientTransform="matrix(0.598359, 0, -0.729427, 1.012048, 147.786285, -2.069081)">
                                        <stop offset="0" style="stop-color: rgb(31,64,4);"></stop>
                                        <stop offset="1" style="stop-color: #1a3506"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-15" gradientUnits="userSpaceOnUse" cx="107.613" cy="177.189"
                                                    r="41.15"
                                                    gradientTransform="matrix(0.722745, 0, 0, 0.553521, 18.427466, 66.94198)">
                                        <stop offset="0" style="stop-color: rgb(24,64,6);"></stop>
                                        <stop offset="1" style="stop-color: rgb(31,64,4);"></stop>
                                    </radialgradient>
                                    <lineargradient id="gradient-16" gradientUnits="userSpaceOnUse" x1="79.232" y1="148.661"
                                                    x2="79.232" y2="267.785"
                                                    gradientTransform="matrix(0.025831, -0.999666, 0.153237, 0.00396, 43.953685, 274.434674)">
                                        <stop offset="0" style="stop-color: #1a3707"></stop>
                                        <stop offset="1" style="stop-color: rgb(31,64,4);"></stop>
                                    </lineargradient>
                                    <radialgradient id="gradient-2" gradientUnits="userSpaceOnUse" cx="33.089" cy="83.922"
                                                    r="27.475"
                                                    gradientTransform="matrix(0.758528, 1.916342, -0.693287, 0.585241, 83.304087, -39.360742)">
                                        <stop offset="0" style="stop-color: rgb(52,0,0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(79,23,23);"></stop>
                                    </radialgradient>
                                </defs>
                                <path
                                    d="M 73.281 159.571 C 72.647 190.375 75.055 224.982 80.506 263.392 C 81.129 267.785 93.817 263.392 93.817 263.392 C 92.284 264.35 81.135 187.678 88.112 161.093 C 90.388 152.419 77.266 148.661 73.281 159.571 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-16);">
                                    <animate repeats="1" id="animate0" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 69.281 159.571 C 68.647 190.375 71.055 224.982 76.506 263.392 C 77.129 267.785 89.817 263.392 89.817 263.392 C 88.284 264.35 77.135 187.678 84.112 161.093 C 86.388 152.419 73.266 148.661 69.281 159.571 Z"></animate>
                                </path>
                                <path
                                    d="M 46.953 119.95 C 45.235 117.533 42.584 112.794 41.114 110.103 C 40.46 108.906 40.478 108.549 40.039 108.114 C 35.996 104.1 26.687 103.38 26.687 103.38 C 26.687 103.38 34.854 97.115 39.086 97.698 C 44.858 98.492 50.547 103.452 55.298 110.008 C 62.512 119.962 72.703 149.303 72.703 149.303 C 72.703 149.303 55.029 131.31 46.953 119.95 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-13);">
                                    <animate repeats="1" id="animate1" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 31.631 125.725 C 28.891 123.784 24.662 119.977 22.317 117.816 C 21.274 116.854 21.302 116.567 20.603 116.218 C 14.153 112.994 -0.694 112.415 -0.694 112.415 C -0.694 112.415 12.333 107.383 19.082 107.851 C 28.289 108.489 37.364 112.473 44.942 117.739 C 56.448 125.735 72.703 149.303 72.703 149.303 C 72.703 149.303 44.513 134.85 31.631 125.725 Z"></animate>
                                </path>
                                <path
                                    d="M 125.945 180.107 L 109.454 169.372 C 106.365 165.002 109.271 159.533 100.933 155.899 C 94.395 153.05 66.464 149.933 78.394 155.058 C 93.119 161.382 82.057 170.1 125.945 180.107 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-15);">
                                    <animate repeats="1" id="animate2" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 148.763 204.446 L 125.945 185.051 C 121.672 177.156 125.693 167.276 114.156 160.712 C 105.11 155.565 66.464 149.933 82.971 159.191 C 103.344 170.617 88.039 186.367 148.763 204.446 Z"></animate>
                                </path>
                                <path
                                    d="M 90.099 156.29 C 88.891 153.292 90.921 155.595 93.141 153.247 C 98.208 147.888 95.989 137.519 101.888 133.092 C 108.341 128.25 113.536 123.721 107.972 117.88 C 97.368 106.747 107.951 83.841 112.536 84.414 C 112.536 84.414 113.025 78.245 118.24 79.85 C 123.087 81.341 135.801 78.415 137.255 83.273 C 138.221 86.5 136.354 90.548 133.832 92.78 C 131.69 94.675 127.25 92.447 125.466 94.682 C 124.517 95.871 123.465 94.713 122.424 95.822 C 121.033 97.303 119.381 99.626 119.381 99.626 C 119.381 99.626 121.654 92.196 120.141 104.95 C 119.318 111.882 120.656 105.712 117.48 117.879 C 115.795 124.332 120.84 127.039 111.015 143.74 C 108.626 147.8 106.597 153.874 101.888 154.008 C 98.64 154.1 91.313 159.304 90.099 156.29 Z"
                                    style="fill: url(#gradient-4); stroke: rgba(255, 0, 0, 0);">
                                    <animate repeats="1" id="animate3" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 88.958 161.994 C 87.75 158.996 90.921 155.595 93.141 153.247 C 98.208 147.888 106.637 147.026 112.536 142.599 C 118.989 137.757 124.478 131.678 129.649 125.486 C 137.065 116.606 149.425 96.964 149.425 96.964 C 149.425 96.964 160.562 94.598 165.777 96.203 C 170.624 97.694 176.493 100.472 177.947 105.33 C 178.913 108.557 177.046 112.605 174.524 114.837 C 172.382 116.732 167.942 114.504 166.158 116.739 C 165.209 117.928 167.199 120.193 166.158 121.302 C 164.767 122.783 160.073 121.683 160.073 121.683 C 160.073 121.683 155.121 139.733 149.044 146.402 C 144.342 151.562 137.389 154.391 130.79 156.67 C 124.486 158.847 117.417 157.843 111.015 159.712 C 106.493 161.032 102.794 165.283 98.085 165.417 C 94.837 165.509 90.172 165.008 88.958 161.994 Z"></animate>
                                </path>
                                <path
                                    d="M 62.176 137.894 C 59.831 133.766 59.753 126.528 57.254 118.879 C 55.976 114.967 56.069 106.679 54.167 102.907 C 52.326 99.257 52.23 94.76 50.378 91.118 C 47.918 86.281 50.766 86.433 41.044 80.85 C 36.499 78.24 31.211 82.949 33.109 78.188 C 36.417 69.886 50.787 73.079 57.47 68.3 C 60.05 66.455 63.869 64.244 67.014 63.357 C 68.178 63.028 70.383 64.878 70.383 64.878 C 70.383 64.878 71.908 61.837 75.047 62.975 C 75.047 62.975 76.907 66.637 80.141 64.117 C 83.6 61.423 82.944 65.721 86.799 67.54 C 94.384 71.119 94.482 74.765 94.482 74.765 C 128.904 119.447 94.989 195.653 62.176 137.894 Z"
                                    style="fill: url(#gradient-0); stroke: rgba(255, 0, 0, 0);">
                                    <animate repeats="1" id="animate4" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 44.942 120.781 C 41.293 117.204 34.996 117.021 31.631 113.175 C 28.748 109.88 28.911 104.778 26.688 101.006 C 24.536 97.356 20.866 94.76 18.701 91.118 C 15.826 86.281 12.931 81.109 12.236 75.526 C 11.587 70.314 12.3 64.695 14.518 59.934 C 18.386 51.632 24.959 44.177 32.772 39.398 C 35.788 37.553 39.364 37.623 43.04 36.736 C 44.401 36.407 43.421 32.553 43.421 32.553 C 43.421 32.553 44.315 31.034 47.984 32.172 C 47.984 32.172 51.048 22.903 54.829 20.383 C 58.872 17.689 64.775 16.663 69.281 18.482 C 78.148 22.061 87.155 40.919 87.155 40.919 C 129.95 85.497 103.042 177.736 44.942 120.781 Z"></animate>
                                </path>
                                <path
                                    d="M 70.914 71.237 L 76.638 69.198 C 77.362 66.255 89.209 45.785 90.524 68.715 C 90.661 71.103 93.14 66.504 93.14 66.504 C 93.14 66.504 98.766 61.707 101.007 62.911 C 106.081 65.636 109.6 59.835 112.863 65.977 C 118.208 76.036 108.947 85.333 108.52 96.88 C 108.213 105.193 114.806 116.288 111.821 123.103 C 109.37 128.702 107.584 146.029 107.584 146.029 C 80.053 193.792 53.77 100.982 70.914 71.237 Z"
                                    style="fill: url(#gradient-1); stroke: rgba(255, 0, 0, 0);"
                                    transform="matrix(0.99135, 0.131244, -0.131244, 0.99135, 15.956242, -10.615298)">
                                    <animate repeats="1" id="animate5" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 73.464 53.849 L 87.535 41.68 C 87.535 41.68 105.977 36.949 113.775 40.919 C 116.376 42.243 118.719 48.145 118.719 48.145 C 118.719 48.145 125.275 48.072 128.227 49.286 C 134.91 52.035 141.618 56.401 145.34 62.596 C 151.436 72.743 153.533 85.935 151.425 97.583 C 149.908 105.969 143.531 112.765 138.495 119.64 C 134.358 125.288 124.424 135.233 124.424 135.233 C 79.951 183.412 45.768 83.853 73.464 53.849 Z"></animate>
                                </path>
                                <path
                                    d="M 79.028 139.796 C 79.028 139.796 70.453 142.266 65.687 144.415 C 61.432 146.333 57 148.408 52.224 151.728 C 47.552 154.975 42.312 161.308 37.936 163.659 C 34.523 165.493 30.327 164.428 30.327 164.428 C 40.91 171.741 56.429 169.047 76.884 156.346 C 84.002 151.926 84.717 146.409 79.028 139.796 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-14);">
                                    <animate repeats="1" id="animate6" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 55.97 140.176 C 55.97 140.176 44.615 142.617 39.237 144.74 C 34.437 146.635 29.53 148.686 25.547 151.966 C 21.65 155.175 20.521 161.432 16.039 163.755 C 12.543 165.567 4.25 164.515 4.25 164.515 C 30.744 171.741 53.435 169.079 72.323 156.529 C 78.894 152.162 73.443 146.711 55.97 140.176 Z"></animate>
                                </path>
                                <path
                                    d="M 105.028 130.668 C 98.146 97.987 126.006 49.499 85.253 68.681 C 54.631 83.094 48.236 181.015 105.028 130.668 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-7);">
                                    <animate repeats="1" id="animate7" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 112.254 128.767 C 132.537 99.358 127.585 45.893 100.845 62.596 C 72.14 80.525 55.462 179.114 112.254 128.767 Z"></animate>
                                </path>
                                <path
                                    d="M 67.428 133.685 L 66.92 115.513 C 58.539 81.763 60.825 70.019 73.777 80.279 C 88.292 91.779 95.234 113.66 94.601 145.924 C 94.329 159.843 85.271 155.764 67.428 133.685 Z"
                                    style="fill: url(#gradient-2); stroke: rgba(0, 0, 0, 0);">
                                    <animate repeats="1" id="animate8" begin="infinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 47.239 119.453 L 46.478 100.819 C 33.928 66.212 37.351 54.17 56.746 64.691 C 78.482 76.482 88.877 98.92 87.93 132.003 C 87.522 146.276 73.958 142.092 47.239 119.453 Z"></animate>
                                </path>
                                <path
                                    d="M 100.085 83.132 C 88.793 39.094 59.208 77.578 68.14 112.415 C 81.999 195.394 111.856 135.608 100.085 83.132 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-6);">
                                    <animate repeats="1" id="animate9" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 108.832 77.808 C 97.54 33.77 37.151 58.943 46.083 93.78 C 73.235 179.557 125.789 131.376 108.832 77.808 Z"></animate>
                                </path>
                                <path
                                    d="M 72.703 94.161 C 82.337 75.526 90.45 75.906 97.042 95.301 C 102.305 110.787 96.981 126.253 81.07 141.698 Q 63.887 158.377 72.703 94.161 Z"
                                    style="fill: url(#gradient-8); stroke: rgba(23, 11, 11, 0);">
                                    <animate repeats="1" id="animate10" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 72.703 94.161 C 82.337 75.526 90.45 75.906 97.042 95.301 C 102.305 110.787 96.981 126.253 81.07 141.698 Q 63.887 158.377 72.703 94.161 Z"></animate>
                                </path>
                                <path
                                    d="M 79.929 94.921 C 79.929 110.386 82.718 124.838 88.296 138.275 C 94.391 152.956 95.658 137.111 92.099 90.738 C 92.233 91.34 89.707 99.625 79.929 94.921 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-11);">
                                    <animate repeats="1" id="animate11" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 79.929 94.921 C 79.929 110.386 82.718 124.838 88.296 138.275 C 94.391 152.956 95.658 137.111 92.099 90.738 C 92.233 91.34 89.707 99.625 79.929 94.921 Z"></animate>
                                </path>
                                <path
                                    d="M 73.464 85.414 C 69.982 90.035 68.588 93.977 70.421 104.429 C 72.308 115.19 88.12 121.815 82.971 132.951 C 77.322 145.168 90.148 136.061 94 103.288 C 92.924 104.58 91.84 102.508 73.464 85.414 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-9);">
                                    <animate repeats="1" id="animate12" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 60.914 84.273 C 54.322 88.203 52.547 95.936 55.59 107.471 C 58.634 119.012 64.719 129.28 73.844 138.275 C 83.429 147.724 90.148 136.061 94 103.288 C 92.924 104.58 79.29 101.367 60.914 84.273 Z"></animate>
                                </path>
                                <path
                                    d="M 68.14 97.964 C 70.663 106.543 101.871 103.202 99.324 94.541 C 100.286 103.186 107.338 120.762 86.013 126.486 C 69.818 130.833 68.761 122.681 68.14 97.964 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-10);">
                                    <animate repeats="1" id="animate13" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 55.21 105.95 C 57.733 114.529 114.801 99.399 112.254 90.738 C 123.536 115.964 118.212 136.627 97.042 142.078 C 80.803 146.259 65.338 131.428 55.21 105.95 Z"></animate>
                                </path>
                                <path
                                    d="M 65.621 71.386 C 73.187 66.787 74.757 123.742 73.282 132.028 C 73.282 132.028 73.916 123.242 72.899 120.682 C 65.839 102.914 78.876 22.508 100.091 72.56 C 102.929 79.255 98.089 86.6 106.603 88.21 C 109.251 88.711 110.816 108.552 110.816 108.552 C 110.816 108.552 109.611 116.801 111.581 117.942 C 112.973 118.748 110.433 126.551 110.433 126.551 C 110.433 126.551 111.19 129.51 109.283 131.244 C 103.986 136.064 105.8 144.744 99.709 148.46 C 97.396 149.87 101.41 154.006 98.943 155.111 C 95.538 156.636 91.926 157.948 88.219 158.24 C 85.14 158.483 81.973 158.015 79.027 157.067 C 74.07 155.474 73.98 150.948 70.219 147.286 C 67.857 144.986 67.952 132.013 65.622 129.679 C 63.214 127.267 64.91 123.17 64.091 112.466 C 63.678 107.072 64.091 91.729 64.091 91.729 C 64.091 91.729 59.049 86.584 59.877 79.211 C 60.224 76.12 63.005 72.977 65.621 71.386 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-12);">
                                    <animate repeats="1" id="animate14" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 39.237 122.683 C 46.749 118.213 62.759 115.009 61.295 123.063 C 61.295 123.063 66.241 120.779 68.9 120.401 C 73.55 119.739 78.314 120.546 82.971 121.162 C 91.45 122.284 99.617 125.191 108.071 126.486 C 110.714 126.891 116.057 127.246 116.057 127.246 C 116.057 127.246 120.185 127.658 122.142 128.767 C 123.524 129.55 124.424 132.951 124.424 132.951 C 124.424 132.951 121.753 137.349 119.86 139.035 C 114.6 143.72 107.654 146.072 101.606 149.684 C 99.31 151.055 97.21 152.793 94.761 153.867 C 91.38 155.35 87.793 156.625 84.112 156.909 C 81.055 157.145 77.91 156.69 74.985 155.769 C 70.063 154.22 65.03 152.103 61.295 148.543 C 58.95 146.308 58.664 142.444 56.351 140.176 C 53.96 137.831 50.7 136.511 47.604 135.233 C 42.743 133.227 32.392 131.049 32.392 131.049 C 32.392 131.049 31.189 128.709 31.631 127.627 C 32.774 124.828 36.639 124.229 39.237 122.683 Z"></animate>
                                </path>
                            </svg>
                            <div class="rose_options">
                                 <div class="option option_text">It withering ...</div>
                            </div>`;
            }

            if (val[0] === 'blooming' && val[1].show) {

                svgSource = `<svg class="rose_svg" viewBox="0 0 188 261">
                                <defs>
                                    <radialgradient id="gradient-0" gradientUnits="userSpaceOnUse" cx="-107.308" cy="104.329"
                                                    r="59.181"
                                                    gradientTransform="matrix(0.261752, 0.411262, -0.686293, 0.596934, 160.094667, 49.38985)">
                                        <stop offset="0" style="stop-color: rgb(255, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(141, 41, 41);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-1" gradientUnits="userSpaceOnUse" cx="113.342" cy="62.644"
                                                    r="53.882"
                                                    gradientTransform="matrix(-0.169507, 1.182475, -0.714039, -0.308382, 160.212434, -46.522622)">
                                        <stop offset="0" style="stop-color: rgb(255, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(141, 41, 41);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-4" gradientUnits="userSpaceOnUse" cx="127.727" cy="116.674"
                                                    r="45.581"
                                                    gradientTransform="matrix(-0.468422, -1.651974, 0.962071, -0.272798, 74.446964, 391.898588)">
                                        <stop offset="0" style="stop-color: rgb(255, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(141, 41, 41);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-6" gradientUnits="userSpaceOnUse" cx="43.926" cy="85.895"
                                                    r="44.319"
                                                    gradientTransform="matrix(1.145876, -0.154456, 0.133585, 0.991037, 18.521778, 10.448842)">
                                        <stop offset="0" style="stop-color: rgb(56, 16, 16);"></stop>
                                        <stop offset="1" style="stop-color: rgb(255, 0, 0);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-7" gradientUnits="userSpaceOnUse" cx="70.257" cy="63.907"
                                                    r="38.537"
                                                    gradientTransform="matrix(-0.480251, 0.463812, -0.694689, -0.719311, 216.251059, 74.926092)">
                                        <stop offset="0" style="stop-color: rgb(255, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(141, 41, 41);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-8" gradientUnits="userSpaceOnUse" cx="99.231" cy="116.778"
                                                    r="19.209"
                                                    gradientTransform="matrix(0.18829, -1.009689, 0.983052, 0.183324, -48.104751, 172.536193)">
                                        <stop offset="0" style="stop-color: rgb(51, 13, 13);"></stop>
                                        <stop offset="1" style="stop-color: rgb(255, 0, 0);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-9" gradientUnits="userSpaceOnUse" cx="77.314" cy="119.309"
                                                    r="20.726"
                                                    gradientTransform="matrix(-1.623871, -1.229366, 0.603596, -0.79729, 122.245012, 298.564429)">
                                        <stop offset="0" style="stop-color: rgb(115, 42, 42);"></stop>
                                        <stop offset="1" style="stop-color: rgb(255, 0, 0);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-10" gradientUnits="userSpaceOnUse" cx="91.275" cy="115.836"
                                                    r="34.163">
                                        <stop offset="0" style="stop-color: rgb(255, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(141, 41, 41);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-11" gradientUnits="userSpaceOnUse" cx="87.793" cy="121.847"
                                                    r="7.864"
                                                    gradientTransform="matrix(-0.305698, -2.998266, 0.994843, -0.101432, -6.587452, 397.432981)">
                                        <stop offset="0" style="stop-color: rgb(255, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(95, 30, 30);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-12" gradientUnits="userSpaceOnUse" cx="77.806" cy="136.077"
                                                    r="46.618"
                                                    gradientTransform="matrix(1.007103, 0, 0, 1.028773, 3.509742, -3.183751)">
                                        <stop offset="0" style="stop-color: rgb(255, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(141, 41, 41);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-13" gradientUnits="userSpaceOnUse" cx="34.864" cy="119.976"
                                                    r="36.699"
                                                    gradientTransform="matrix(-0.483999, -0.503131, 0.29077, -1.102951, 30.968876, 262.661348)">
                                        <stop offset="0" style="stop-color: rgb(67, 88, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(173, 183, 141);"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-14" gradientUnits="userSpaceOnUse" cx="41.572" cy="155.958"
                                                    r="37.322"
                                                    gradientTransform="matrix(0.598359, 0, -0.729427, 1.012048, 147.786285, -2.069081)">
                                        <stop offset="0" style="stop-color: rgb(64, 78, 18);"></stop>
                                        <stop offset="1" style="stop-color: #758d29"></stop>
                                    </radialgradient>
                                    <radialgradient id="gradient-15" gradientUnits="userSpaceOnUse" cx="107.613" cy="177.189"
                                                    r="41.15"
                                                    gradientTransform="matrix(0.722745, 0, 0, 0.553521, 18.427466, 66.94198)">
                                        <stop offset="0" style="stop-color: rgb(99, 121, 28);"></stop>
                                        <stop offset="1" style="stop-color: rgb(62, 76, 14);"></stop>
                                    </radialgradient>
                                    <lineargradient id="gradient-16" gradientUnits="userSpaceOnUse" x1="79.232" y1="148.661"
                                                    x2="79.232" y2="267.785"
                                                    gradientTransform="matrix(0.025831, -0.999666, 0.153237, 0.00396, 43.953685, 274.434674)">
                                        <stop offset="0" style="stop-color: #bada55"></stop>
                                        <stop offset="1" style="stop-color: rgb(59, 72, 14);"></stop>
                                    </lineargradient>
                                    <radialgradient id="gradient-2" gradientUnits="userSpaceOnUse" cx="33.089" cy="83.922"
                                                    r="27.475"
                                                    gradientTransform="matrix(0.758528, 1.916342, -0.693287, 0.585241, 83.304087, -39.360742)">
                                        <stop offset="0" style="stop-color: rgb(255, 0, 0);"></stop>
                                        <stop offset="1" style="stop-color: rgb(141, 41, 41);"></stop>
                                    </radialgradient>
                                </defs>
                                <path
                                    d="M 73.281 159.571 C 72.647 190.375 75.055 224.982 80.506 263.392 C 81.129 267.785 93.817 263.392 93.817 263.392 C 92.284 264.35 81.135 187.678 88.112 161.093 C 90.388 152.419 77.266 148.661 73.281 159.571 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-16);">
                                    <animate repeats="1" id="animate0" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 69.281 159.571 C 68.647 190.375 71.055 224.982 76.506 263.392 C 77.129 267.785 89.817 263.392 89.817 263.392 C 88.284 264.35 77.135 187.678 84.112 161.093 C 86.388 152.419 73.266 148.661 69.281 159.571 Z"></animate>
                                </path>
                                <path
                                    d="M 46.953 119.95 C 45.235 117.533 42.584 112.794 41.114 110.103 C 40.46 108.906 40.478 108.549 40.039 108.114 C 35.996 104.1 26.687 103.38 26.687 103.38 C 26.687 103.38 34.854 97.115 39.086 97.698 C 44.858 98.492 50.547 103.452 55.298 110.008 C 62.512 119.962 72.703 149.303 72.703 149.303 C 72.703 149.303 55.029 131.31 46.953 119.95 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-13);">
                                    <animate repeats="1" id="animate1" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 31.631 125.725 C 28.891 123.784 24.662 119.977 22.317 117.816 C 21.274 116.854 21.302 116.567 20.603 116.218 C 14.153 112.994 -0.694 112.415 -0.694 112.415 C -0.694 112.415 12.333 107.383 19.082 107.851 C 28.289 108.489 37.364 112.473 44.942 117.739 C 56.448 125.735 72.703 149.303 72.703 149.303 C 72.703 149.303 44.513 134.85 31.631 125.725 Z"></animate>
                                </path>
                                <path
                                    d="M 125.945 180.107 L 109.454 169.372 C 106.365 165.002 109.271 159.533 100.933 155.899 C 94.395 153.05 66.464 149.933 78.394 155.058 C 93.119 161.382 82.057 170.1 125.945 180.107 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-15);">
                                    <animate repeats="1" id="animate2" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 148.763 204.446 L 125.945 185.051 C 121.672 177.156 125.693 167.276 114.156 160.712 C 105.11 155.565 66.464 149.933 82.971 159.191 C 103.344 170.617 88.039 186.367 148.763 204.446 Z"></animate>
                                </path>
                                <path
                                    d="M 90.099 156.29 C 88.891 153.292 90.921 155.595 93.141 153.247 C 98.208 147.888 95.989 137.519 101.888 133.092 C 108.341 128.25 113.536 123.721 107.972 117.88 C 97.368 106.747 107.951 83.841 112.536 84.414 C 112.536 84.414 113.025 78.245 118.24 79.85 C 123.087 81.341 135.801 78.415 137.255 83.273 C 138.221 86.5 136.354 90.548 133.832 92.78 C 131.69 94.675 127.25 92.447 125.466 94.682 C 124.517 95.871 123.465 94.713 122.424 95.822 C 121.033 97.303 119.381 99.626 119.381 99.626 C 119.381 99.626 121.654 92.196 120.141 104.95 C 119.318 111.882 120.656 105.712 117.48 117.879 C 115.795 124.332 120.84 127.039 111.015 143.74 C 108.626 147.8 106.597 153.874 101.888 154.008 C 98.64 154.1 91.313 159.304 90.099 156.29 Z"
                                    style="fill: url(#gradient-4); stroke: rgba(255, 0, 0, 0);">
                                    <animate repeats="1" id="animate3" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 88.958 161.994 C 87.75 158.996 90.921 155.595 93.141 153.247 C 98.208 147.888 106.637 147.026 112.536 142.599 C 118.989 137.757 124.478 131.678 129.649 125.486 C 137.065 116.606 149.425 96.964 149.425 96.964 C 149.425 96.964 160.562 94.598 165.777 96.203 C 170.624 97.694 176.493 100.472 177.947 105.33 C 178.913 108.557 177.046 112.605 174.524 114.837 C 172.382 116.732 167.942 114.504 166.158 116.739 C 165.209 117.928 167.199 120.193 166.158 121.302 C 164.767 122.783 160.073 121.683 160.073 121.683 C 160.073 121.683 155.121 139.733 149.044 146.402 C 144.342 151.562 137.389 154.391 130.79 156.67 C 124.486 158.847 117.417 157.843 111.015 159.712 C 106.493 161.032 102.794 165.283 98.085 165.417 C 94.837 165.509 90.172 165.008 88.958 161.994 Z"></animate>
                                </path>
                                <path
                                    d="M 62.176 137.894 C 59.831 133.766 59.753 126.528 57.254 118.879 C 55.976 114.967 56.069 106.679 54.167 102.907 C 52.326 99.257 52.23 94.76 50.378 91.118 C 47.918 86.281 50.766 86.433 41.044 80.85 C 36.499 78.24 31.211 82.949 33.109 78.188 C 36.417 69.886 50.787 73.079 57.47 68.3 C 60.05 66.455 63.869 64.244 67.014 63.357 C 68.178 63.028 70.383 64.878 70.383 64.878 C 70.383 64.878 71.908 61.837 75.047 62.975 C 75.047 62.975 76.907 66.637 80.141 64.117 C 83.6 61.423 82.944 65.721 86.799 67.54 C 94.384 71.119 94.482 74.765 94.482 74.765 C 128.904 119.447 94.989 195.653 62.176 137.894 Z"
                                    style="fill: url(#gradient-0); stroke: rgba(255, 0, 0, 0);">
                                    <animate repeats="1" id="animate4" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 44.942 120.781 C 41.293 117.204 34.996 117.021 31.631 113.175 C 28.748 109.88 28.911 104.778 26.688 101.006 C 24.536 97.356 20.866 94.76 18.701 91.118 C 15.826 86.281 12.931 81.109 12.236 75.526 C 11.587 70.314 12.3 64.695 14.518 59.934 C 18.386 51.632 24.959 44.177 32.772 39.398 C 35.788 37.553 39.364 37.623 43.04 36.736 C 44.401 36.407 43.421 32.553 43.421 32.553 C 43.421 32.553 44.315 31.034 47.984 32.172 C 47.984 32.172 51.048 22.903 54.829 20.383 C 58.872 17.689 64.775 16.663 69.281 18.482 C 78.148 22.061 87.155 40.919 87.155 40.919 C 129.95 85.497 103.042 177.736 44.942 120.781 Z"></animate>
                                </path>
                                <path
                                    d="M 70.914 71.237 L 76.638 69.198 C 77.362 66.255 89.209 45.785 90.524 68.715 C 90.661 71.103 93.14 66.504 93.14 66.504 C 93.14 66.504 98.766 61.707 101.007 62.911 C 106.081 65.636 109.6 59.835 112.863 65.977 C 118.208 76.036 108.947 85.333 108.52 96.88 C 108.213 105.193 114.806 116.288 111.821 123.103 C 109.37 128.702 107.584 146.029 107.584 146.029 C 80.053 193.792 53.77 100.982 70.914 71.237 Z"
                                    style="fill: url(#gradient-1); stroke: rgba(255, 0, 0, 0);"
                                    transform="matrix(0.99135, 0.131244, -0.131244, 0.99135, 15.956242, -10.615298)">
                                    <animate repeats="1" id="animate5" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 73.464 53.849 L 87.535 41.68 C 87.535 41.68 105.977 36.949 113.775 40.919 C 116.376 42.243 118.719 48.145 118.719 48.145 C 118.719 48.145 125.275 48.072 128.227 49.286 C 134.91 52.035 141.618 56.401 145.34 62.596 C 151.436 72.743 153.533 85.935 151.425 97.583 C 149.908 105.969 143.531 112.765 138.495 119.64 C 134.358 125.288 124.424 135.233 124.424 135.233 C 79.951 183.412 45.768 83.853 73.464 53.849 Z"></animate>
                                </path>
                                <path
                                    d="M 79.028 139.796 C 79.028 139.796 70.453 142.266 65.687 144.415 C 61.432 146.333 57 148.408 52.224 151.728 C 47.552 154.975 42.312 161.308 37.936 163.659 C 34.523 165.493 30.327 164.428 30.327 164.428 C 40.91 171.741 56.429 169.047 76.884 156.346 C 84.002 151.926 84.717 146.409 79.028 139.796 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-14);">
                                    <animate repeats="1" id="animate6" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 55.97 140.176 C 55.97 140.176 44.615 142.617 39.237 144.74 C 34.437 146.635 29.53 148.686 25.547 151.966 C 21.65 155.175 20.521 161.432 16.039 163.755 C 12.543 165.567 4.25 164.515 4.25 164.515 C 30.744 171.741 53.435 169.079 72.323 156.529 C 78.894 152.162 73.443 146.711 55.97 140.176 Z"></animate>
                                </path>
                                <path
                                    d="M 105.028 130.668 C 98.146 97.987 126.006 49.499 85.253 68.681 C 54.631 83.094 48.236 181.015 105.028 130.668 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-7);">
                                    <animate repeats="1" id="animate7" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 112.254 128.767 C 132.537 99.358 127.585 45.893 100.845 62.596 C 72.14 80.525 55.462 179.114 112.254 128.767 Z"></animate>
                                </path>
                                <path
                                    d="M 67.428 133.685 L 66.92 115.513 C 58.539 81.763 60.825 70.019 73.777 80.279 C 88.292 91.779 95.234 113.66 94.601 145.924 C 94.329 159.843 85.271 155.764 67.428 133.685 Z"
                                    style="fill: url(#gradient-2); stroke: rgba(0, 0, 0, 0);">
                                    <animate repeats="1" id="animate8" begin="infinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 47.239 119.453 L 46.478 100.819 C 33.928 66.212 37.351 54.17 56.746 64.691 C 78.482 76.482 88.877 98.92 87.93 132.003 C 87.522 146.276 73.958 142.092 47.239 119.453 Z"></animate>
                                </path>
                                <path
                                    d="M 100.085 83.132 C 88.793 39.094 59.208 77.578 68.14 112.415 C 81.999 195.394 111.856 135.608 100.085 83.132 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-6);">
                                    <animate repeats="1" id="animate9" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 108.832 77.808 C 97.54 33.77 37.151 58.943 46.083 93.78 C 73.235 179.557 125.789 131.376 108.832 77.808 Z"></animate>
                                </path>
                                <path
                                    d="M 72.703 94.161 C 82.337 75.526 90.45 75.906 97.042 95.301 C 102.305 110.787 96.981 126.253 81.07 141.698 Q 63.887 158.377 72.703 94.161 Z"
                                    style="fill: url(#gradient-8); stroke: rgba(23, 11, 11, 0);">
                                    <animate repeats="1" id="animate10" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 72.703 94.161 C 82.337 75.526 90.45 75.906 97.042 95.301 C 102.305 110.787 96.981 126.253 81.07 141.698 Q 63.887 158.377 72.703 94.161 Z"></animate>
                                </path>
                                <path
                                    d="M 79.929 94.921 C 79.929 110.386 82.718 124.838 88.296 138.275 C 94.391 152.956 95.658 137.111 92.099 90.738 C 92.233 91.34 89.707 99.625 79.929 94.921 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-11);">
                                    <animate repeats="1" id="animate11" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 79.929 94.921 C 79.929 110.386 82.718 124.838 88.296 138.275 C 94.391 152.956 95.658 137.111 92.099 90.738 C 92.233 91.34 89.707 99.625 79.929 94.921 Z"></animate>
                                </path>
                                <path
                                    d="M 73.464 85.414 C 69.982 90.035 68.588 93.977 70.421 104.429 C 72.308 115.19 88.12 121.815 82.971 132.951 C 77.322 145.168 90.148 136.061 94 103.288 C 92.924 104.58 91.84 102.508 73.464 85.414 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-9);">
                                    <animate repeats="1" id="animate12" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 60.914 84.273 C 54.322 88.203 52.547 95.936 55.59 107.471 C 58.634 119.012 64.719 129.28 73.844 138.275 C 83.429 147.724 90.148 136.061 94 103.288 C 92.924 104.58 79.29 101.367 60.914 84.273 Z"></animate>
                                </path>
                                <path
                                    d="M 68.14 97.964 C 70.663 106.543 101.871 103.202 99.324 94.541 C 100.286 103.186 107.338 120.762 86.013 126.486 C 69.818 130.833 68.761 122.681 68.14 97.964 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-10);">
                                    <animate repeats="1" id="animate13" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 55.21 105.95 C 57.733 114.529 114.801 99.399 112.254 90.738 C 123.536 115.964 118.212 136.627 97.042 142.078 C 80.803 146.259 65.338 131.428 55.21 105.95 Z"></animate>
                                </path>
                                <path
                                    d="M 65.621 71.386 C 73.187 66.787 74.757 123.742 73.282 132.028 C 73.282 132.028 73.916 123.242 72.899 120.682 C 65.839 102.914 78.876 22.508 100.091 72.56 C 102.929 79.255 98.089 86.6 106.603 88.21 C 109.251 88.711 110.816 108.552 110.816 108.552 C 110.816 108.552 109.611 116.801 111.581 117.942 C 112.973 118.748 110.433 126.551 110.433 126.551 C 110.433 126.551 111.19 129.51 109.283 131.244 C 103.986 136.064 105.8 144.744 99.709 148.46 C 97.396 149.87 101.41 154.006 98.943 155.111 C 95.538 156.636 91.926 157.948 88.219 158.24 C 85.14 158.483 81.973 158.015 79.027 157.067 C 74.07 155.474 73.98 150.948 70.219 147.286 C 67.857 144.986 67.952 132.013 65.622 129.679 C 63.214 127.267 64.91 123.17 64.091 112.466 C 63.678 107.072 64.091 91.729 64.091 91.729 C 64.091 91.729 59.049 86.584 59.877 79.211 C 60.224 76.12 63.005 72.977 65.621 71.386 Z"
                                    style="stroke: rgba(0, 0, 0, 0); fill: url(#gradient-12);">
                                    <animate repeats="1" id="animate14" begin="indefinite" fill="freeze" calcMode="spline"
                                            keySplines="0 .06 0 .97" keyTimes="0;1" attributeName="d" dur="12000ms"
                                            to="M 39.237 122.683 C 46.749 118.213 62.759 115.009 61.295 123.063 C 61.295 123.063 66.241 120.779 68.9 120.401 C 73.55 119.739 78.314 120.546 82.971 121.162 C 91.45 122.284 99.617 125.191 108.071 126.486 C 110.714 126.891 116.057 127.246 116.057 127.246 C 116.057 127.246 120.185 127.658 122.142 128.767 C 123.524 129.55 124.424 132.951 124.424 132.951 C 124.424 132.951 121.753 137.349 119.86 139.035 C 114.6 143.72 107.654 146.072 101.606 149.684 C 99.31 151.055 97.21 152.793 94.761 153.867 C 91.38 155.35 87.793 156.625 84.112 156.909 C 81.055 157.145 77.91 156.69 74.985 155.769 C 70.063 154.22 65.03 152.103 61.295 148.543 C 58.95 146.308 58.664 142.444 56.351 140.176 C 53.96 137.831 50.7 136.511 47.604 135.233 C 42.743 133.227 32.392 131.049 32.392 131.049 C 32.392 131.049 31.189 128.709 31.631 127.627 C 32.774 124.828 36.639 124.229 39.237 122.683 Z"></animate>
                                </path>
                            </svg>
                            <div class="rose_options">
                                <div id="option_coffee" class="option option_coffee">Coffee</div>
                                <div id="option_water" class="option option_water">Pure Water</div>
                                <div class="option option_text">You would like to water the rose with...?</div>
                            </div>`;
            }
        });
            return (
                <div>
                    <InlineSVG src={svgSource}/>
                </div>
            )
    }
}

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
        dispatchChangeRoseStatus: value => {
            dispatch(changeRoseStatus(value))
        }
    }
};

export const Rose = connect(mapStateToProps, mapDispatchToProps)(ConnectRose);
