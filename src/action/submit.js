import { SUBMIT } from '../constant/actionType';

export const submit = (value) => ({
    type: SUBMIT,
    payload: value
});