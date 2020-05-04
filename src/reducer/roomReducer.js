import {CHANGE_STATUS, CHANGE_TAB_STATUS, CHANGE_ROSE_STATUS, CHANGE_PHONE_STATUS, CHANGE_HINT_STATUS, ADD_MESSAGES} from '../constant/actionType';

const initState = {
    "clicked": {},
    "tab": {
        "pwd": {
            "show": true
        },
        "youtube": {
            "show": false
        },
        "portfolio": {
            "show": false
        },
        "uiuxDesign": {
            "show": false
        },
        "phpstorm": {
            "show": false
        },
        "photoshop": {
            "show": false
        },
        "gitBash": {
            "show": false
        }
    },
    "rose": {
        "blooming": {
            "show": true
        },
        "withering": {
            "show": false
        },
    },
    "phone": {
        "isTextDisable": {
            "show": false
        },
        "isInputSending": {
            "show": false
        }
    },
    "capoo": {
        "isHintShow": {
            "show": false
        }
    },
    "messages": {}
};

const roomReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                clicked: {
                    ...state.clicked,
                    [action.payload.name]: {
                        ...state.clicked[action.payload.name],
                        show: action.payload.show
                    }
                }
            };
        case CHANGE_TAB_STATUS :
            return {
                ...state,
                tab: {
                    ...state.tab,
                    [action.payload.name]: {
                        ...state.tab[action.payload.name],
                        show: action.payload.show
                    }
                }
            };
        case CHANGE_ROSE_STATUS :
            return {
                ...state,
                rose: {
                    ...state.rose,
                    [action.payload.name]: {
                        ...state.rose[action.payload.name],
                        show: action.payload.show
                    }
                }
            };
        case CHANGE_PHONE_STATUS :
            return {
                ...state,
                phone: {
                    ...state.phone,
                    [action.payload.name]: {
                        ...state.phone[action.payload.name],
                        show: action.payload.show
                    }
                }
            };
        case CHANGE_HINT_STATUS :
            return {
                ...state,
                capoo: {
                    ...state.capoo,
                    [action.payload.name]: {
                        ...state.capoo[action.payload.name],
                        show: action.payload.show
                    }
                }
            };
        case  ADD_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        default:
            return state;
    }
};

export default roomReducer;