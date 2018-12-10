import { connect } from 'react-redux';
import Home from '../components/pages/Home/Home';
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
        vueIndex: state.current.vueIndex
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
