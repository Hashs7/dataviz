/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
import {CHANGE_INDEX_VUE} from "../actions";

export const current = (state = {}, action) => {
    switch(action.type) {
        case CHANGE_INDEX_VUE:
            return {
                ...state,
                vue: action.index
            };
        default:
            return state;
    }
};

export default current;
