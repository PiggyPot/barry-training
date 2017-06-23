import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

PotsSummary = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.summary}>
        <SummaryItem label='Goals met' value={props.goals} />
        <View style={styles.separator}/>
        <SummaryItem label={'In my pots'} value={props.potTotals} />
        <SummaryItem label={'Next deposit'} value={props.nextDeposit} style={styles.nextDeposit} />
      </View>
    </View>
  )
}

SummaryItem = (props) => {
  return (
    <View style={props.style}>
      <Text style={styles.itemTop}>{props.label}</Text>
      <Text style={styles.itemBottom}>{props.value}</Text>
    </View>
  )
}

export default PotsSummary;
