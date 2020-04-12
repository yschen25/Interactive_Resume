import { CHANGE_ROSE_STATUS } from '../constant/actionType';

export const changeRoseStatus = (value) => ({
    type: CHANGE_ROSE_STATUS,
    payload: value
});