import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { PotListView, PotView } from './scenes';


const App = StackNavigator({
  PotList: { screen: PotListView },
  Pot: { screen: PotView }
});

AppRegistry.registerComponent('training', () => App);
