import { connect } from 'react-redux';
import Bandwidth from "../components/pages/Bandwidth/Bandwidth";
import {
CHANGE_INDEX_VUE
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
 * @returns {{changeVue: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => {
    return {
        changeVue: (i) => dispatch({type: CHANGE_INDEX_VUE, index: i}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bandwidth)
