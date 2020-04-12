import { CHANGE_TAB_STATUS } from '../constant/actionType';

export const changeTabStatus = (value) => ({
    type: CHANGE_TAB_STATUS,
    payload: value
});