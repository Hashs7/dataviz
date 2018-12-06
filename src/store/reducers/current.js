import {
    CHANGE_INDEX_VUE,
    CHANGE_STUFF,
    MAIL_AMOUNT,
    MAIL_TYPE
} from "../actions";

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
        case MAIL_AMOUNT:
            return {
                ...state,
                mailAmount: action.amount
            };
        case MAIL_TYPE:
            return {
                ...state,
                mailType: action.mailtype
            };
        default:
            return state;
    }
};

export default current;
