import { ADD_MESSAGES } from '../constant/actionType';

export const addMessages = (text) => ({
    type: ADD_MESSAGES,
    payload: text
});