import { CLOSE } from '../constant/actionType';

export const close = (selected) => ({
    type: CLOSE,
    payload: selected
});