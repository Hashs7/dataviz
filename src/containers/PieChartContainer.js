import { connect } from 'react-redux';
import PieChart from '../components/charts/PieChart';
import {
    CHANGE_INDEX_VUE,
    CHANGE_STUFF
} from '../store/actions';

/**
 *
 * @param state
 * @returns {{vueIndex: boolean | * | number, stuffHover: *}}
 */
const mapStateToProps = state => {
    return {
        vueIndex: state.current.vue,
        stuffHover: state.current.stuffHover
    }
};

/**
 *
 * @param dispatch
 * @returns {{changeVue: (function(*=): *), changeStuff: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => {
    return {
        changeVue: (i) => dispatch({type: CHANGE_INDEX_VUE, index: i}),
        changeStuff: (i) => dispatch({type: CHANGE_STUFF, index: i}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PieChart)
