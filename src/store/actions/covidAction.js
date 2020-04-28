import { SET_SELECTED_STATE } from "./actionTypes"

export const setSelectedState = state => ({
    type: SET_SELECTED_STATE,
    payload: {
        state
    }
});