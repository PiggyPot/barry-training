import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { PotListView, PotView } from './scenes';


const App = StackNavigator({
  Pot: { screen: PotView },
  PotList: { screen: PotListView },
});

AppRegistry.registerComponent('training', () => App);
