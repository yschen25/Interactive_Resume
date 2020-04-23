import { CHANGE_PHONE_STATUS } from '../constant/actionType';

export const changePhoneStatus = (value) => ({
    type: CHANGE_PHONE_STATUS,
    payload: value
});