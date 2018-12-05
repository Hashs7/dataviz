import { CHANGE_INDEX_VUE, CHANGE_STUFF } from "../actions";

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const current = (state = {}, action) => {
    switch(action.type) {
        case CHANGE_INDEX_VUE:
            return {
                ...state,
                vue: action.index
            };
        case CHANGE_STUFF:
            return {
                ...state,
                stuffHover: action.index
            };
        default:
            return state;
    }
};

export default current;
