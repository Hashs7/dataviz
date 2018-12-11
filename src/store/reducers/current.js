import {
    CHANGE_INDEX_VUE,
    CHANGE_STUFF,
    CHANGE_SCALE,
    MAIL_AMOUNT,
    MAIL_TYPE,
    TOGGLE_MODAL
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
        case TOGGLE_MODAL:
            return {
                ...state,
                modal: !state.modal
            };
        case CHANGE_SCALE:
            return {
                ...state,
                scale: action.index
            };
        default:
            return state;
    }
};

export default current;
