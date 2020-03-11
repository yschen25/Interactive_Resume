import { CHANGE_STATUS, SUBMIT } from '../constant/actionType';

const initState = {
    "notClick": {},
    "clicked": {},
    "tab": {
        "pwd" :{
            "show": true
        },
        "youtube": {
            "show" : false
        }
    }
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
        case SUBMIT :
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
        default:
            return state;
    }
};

export default roomReducer;