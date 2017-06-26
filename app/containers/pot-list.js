import React from 'react';
import { connect } from 'react-redux';
import { PotListView } from '../components';
import { getSectionedPots, getArchivedPots, getSummaryData, getSummaryTotals } from '../selectors';

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

function mapStateToProps(state, ownProps) {
  return {
    listData: getSectionedPots(state),
    archivedPots: getArchivedPots(state),
    summaryData: getSummaryData(state),
    navigateToPot: (id) => {
      ownProps.navigation.navigate('Pot', id);
    }
  }
}

export default connect(mapStateToProps)(PotList);
