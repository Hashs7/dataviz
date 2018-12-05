import { connect } from 'react-redux';
import DataCentersLayout from "../components/pages/DataCenters/DataCentersLayout";
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
        vueIndex: state.current.vue,
        stuffHover: state.current.stuffHover,
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

export default connect(mapStateToProps, mapDispatchToProps)(DataCentersLayout)
