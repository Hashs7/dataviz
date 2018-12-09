import { connect } from 'react-redux';
import About from "../components/pages/About";
import {
    TOGGLE_MODAL,
} from '../store/actions';

/**
 *
 * @param state
 * @returns {{vueIndex: *}}
 */
const mapStateToProps = state => {
    return {
        vueIndex: state.current.vue
    }
};

/**
 *
 * @param dispatch
 * @returns {{toggleModal: (function(): *)}}
 */
const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch({type: TOGGLE_MODAL}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(About)
