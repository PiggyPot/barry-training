import { View } from 'react-native';
import React from 'react';
import PotsSummary from './summary';
import PotsList from './pots';
import styles from './styles.js'

PotList = (props) => {
  return (
    <View style={styles.container}>
      <PotsSummary />
      <PotsList {...props} />
    </View>
  )
}

export default PotList;
