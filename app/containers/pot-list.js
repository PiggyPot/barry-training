import React from 'react';
import { connect } from 'react-redux';
import { PotListView } from '../components';
import { getSectionedPots, getArchivedPots } from '../selectors';

class PotList extends React.Component {
  render() {
    return(
      <PotListView {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    listData: getSectionedPots(state),
    archivedPots: getArchivedPots(state)
  }
}

export default connect(mapStateToProps)(PotList);
