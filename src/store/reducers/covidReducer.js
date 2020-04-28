import * as actions from '../actions/index';
import { initialState } from './initialState';

export function covidReducer(state = initialState, action) {

    const payload = action.payload;

    switch (action.type) {
        case actions.SET_SELECTED_STATE:
            return {
                ...state,
                selectedState: payload.state
            }
        default:
            break;
    }
    return { ...state }
}