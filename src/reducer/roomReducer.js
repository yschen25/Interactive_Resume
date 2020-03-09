import { CLICK, CHANGE_STATUS } from '../constant/actionType';

const initState = {
    "notClick": {},
    "clicked": {}
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
        default:
            return state;
    }
};

export default roomReducer;