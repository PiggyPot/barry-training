import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './app/reducers';
import PotList from './app/containers/pot-list';
import Pot from './app/containers/pot';

const Navigation = StackNavigator({
  PotList: { screen: PotList },
  Pot: { screen: Pot }
});

const store = createStore(reducer);

class Nav extends Component {
  render() {
    return (
      <Navigation />
    )
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}><Nav /></Provider>
    );
  }
}

AppRegistry.registerComponent('training', () => App);
