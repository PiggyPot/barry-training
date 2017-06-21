import React from 'react';
import { View, Text } from 'react-native';
import { Currency } from '../../components';
import styles from './styles.js';

class PotsSummary extends React.Component {
  render() {
    return(
      <View style={styles.summaryContainer}>
        <View style={styles.summary}>
          <SummaryItem label='Goals met' value={this.props.goals} />
          <View style={{backgroundColor: 'rgba(0,0,0,0.2)', width: 1, height: '75%'}}/>
          <SummaryItem label={'In my pots'} value={this.props.potTotals} />
          <SummaryItem label={'Next deposit'} value={this.props.nextDeposit} style={styles.nextDeposit} />
        </View>
      </View>
    )
  }
}

var SummaryItem = (props) => {
  return (
    <View style={props.style}>
      <Text style={{color: '#fff', fontSize: 12}}>{props.label}</Text>
      <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>{props.value}</Text>
    </View>
  )
}

export default PotsSummary;
