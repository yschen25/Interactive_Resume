import { CHANGE_HINT_STATUS } from '../constant/actionType';

export const changeHintStatus = (value) => ({
    type: CHANGE_HINT_STATUS,
    payload: value
});