import { CHANGE_STATUS } from '../constant/actionType';

export const changeStatus = (selected) => ({
    type: CHANGE_STATUS,
    payload: selected
});