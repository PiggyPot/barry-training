import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

class PotSummary extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.row}><Text>Progress</Text><Text>Amount</Text></View>
        <View style={styles.row}><Text>Pot Details</Text><Text>Options</Text></View>
      </View>
    )
  }
}

export default PotSummary;
