import React from 'react';
import { connect } from 'react-redux';
import { PotView } from '../components';
import { getActivePot } from '../selectors';

class Pot extends React.Component {
  static navigationOptions = {
    title: 'Pot',
    headerStyle: {backgroundColor:'#1684e2', shadowRadius: 0, shadowOffset: {height: 0}},
    headerTitleStyle: {color:'#ffffff'}
  }

  render() {
    return(
      <PotView {...this.props} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    pot: getActivePot(state, ownProps.navigation.state.params)
  }
}

export default connect(mapStateToProps)(Pot);
