import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/weather';

import selectWeather from '../../../selectors/weather';

const mapStateToProps = state => ({
  weather: selectWeather(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
