import { SET_SELECTED_STATE, SET_SHOW_DIALOG } from "./actionTypes"

export const setSelectedState = state => ({
    type: SET_SELECTED_STATE,
    payload: {
        state
    }
});
export const setShowDialog = showDialog => ({
    type: SET_SHOW_DIALOG,
    payload: {
        showDialog
    }
});