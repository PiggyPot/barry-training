import React from 'react';
import { connect } from 'react-redux';
import { PotListView } from '../components';
import { getSectionedPots, getArchivedPots, getSummaryData } from '../selectors';

class PotList extends React.Component {
  static navigationOptions = {
    title: 'My Pots',
    headerStyle: {backgroundColor:'#1684e2', shadowRadius: 0, shadowOffset: {height: 0}},
    headerTitleStyle: {color:'#ffffff'}
  };

  render() {
    return(
      <PotListView {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    listData: getSectionedPots(state),
    archivedPots: getArchivedPots(state),
    summaryData: getSummaryData(state)
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    navigateToPot: (id) => {
      dispatch({
        type: 'SET_ACTIVE_POT',
        id: id
      })
      ownProps.navigation.navigate('Pot');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PotList);
