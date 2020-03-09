import { CLICK } from '../constant/actionType';

export const click = (show) => ({
    type: CLICK,
    payload: show
});