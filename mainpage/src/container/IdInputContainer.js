import React, {Component} from 'react';
import Signup from '../components/Signup/Signup';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/input';
import * as idsActions from '../modules/ids';

class IdInputContainer extends Component {
    render() {
        return (
            <Signup/>
        );
    }
}
export default connect(
    (state) => ({
        value: state.input.get('value')
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        IdsActions: bindActionCreators(idsActions, dispatch)
    })
)(IdInputContainer);
