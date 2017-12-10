import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import testActions from '../../actions/test';

import selectTest from '../../selectors/test';

const mapStateToProps = state => ({
  test: selectTest(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(testActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
