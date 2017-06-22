import React from 'react';
import { Text, View } from 'react-native';

class Deposits extends React.Component {
  render() {
    return(
      <NextDesposit />
    )
  }
}

class NextDesposit extends React.Component {
  render() {
    return(
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', justifyContent:'space-between', padding: 10}}>
          <Text>Next deposit in 6 days</Text>
          <Text>View all</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-between', padding:10,  backgroundColor: 'white', borderLeftWidth: 4, borderLeftColor:'rgba(0,0,0,0.4)'}}>
          <Text>30{'\n'}Sep</Text>
          <View>
            <Text style={{alignSelf:'flex-end'}}>+ £12</Text>
            <Text>Deposit pending</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Deposits;
