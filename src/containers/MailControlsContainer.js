import { connect } from 'react-redux';
import MailControls from "../components/pages/Mail/MailControls";
import {
    CHANGE_INDEX_VUE, MAIL_AMOUNT, MAIL_TYPE
} from '../store/actions';

/**
 *
 * @param state
 * @returns {{vueIndex: (number|boolean|*)}}
 */
const mapStateToProps = state => {
    return {
        vueIndex: state.current.vue,
        scale: state.current.scale
    }
};

/**
 *
 * @param dispatch
 * @returns {{changeVue: (function(*=): *), changeMailAmount: (function(*=): *), changeMailType: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => {
    return {
        changeVue: (i) => dispatch({type: CHANGE_INDEX_VUE, index: i}),
        changeMailAmount: (i) => dispatch({type: MAIL_AMOUNT, amount: i}),
        changeMailType: (i) => dispatch({type: MAIL_TYPE, mailtype: i})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MailControls)
