import React from 'react';
import { Text, View } from 'react-native';
import PotSummary from './summary';
import Deposits from './deposits';

class PotView extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Pot',
      headerStyle: {backgroundColor:'#1684e2', shadowRadius: 0, shadowOffset: {height: 0}},
      headerTitleStyle: {color:'#ffffff'},
      headerLeft: <Text style={{color:'#fff'}} onPress={() => {navigation.goBack()}}>Back</Text>
    }
  };

  render() {
    return(
      <View>
        <PotSummary />
        <Deposits />
      </View>
    )
  }
}

export default PotView;
