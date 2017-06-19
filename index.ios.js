/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class training extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <View style={[styles.navRow, {paddingBottom: 0}]}>
            <Text style={styles.navTopItem}>S</Text>
            <Text style={[styles.navTopItem, {fontSize: 18, fontWeight: 'bold'}]}>My Pots</Text>
            <Text style={styles.navTopItem}>A</Text>
          </View>
          <View style={styles.navRow}>
            <NavBottomItem label={'Goals met'} value={'1/5'} />
            <View style={{backgroundColor: 'rgba(0,0,0,0.2)', width: 1, height: '75%'}}/>
            <NavBottomItem label={'In my pots'} value={'£1234.56'} />
            <NavBottomItem label={'Next deposit'} value={'£12.50 - 13 Dec'} style={{backgroundColor: '#09375b', borderWidth: 1, borderRadius: 3, borderColor: '#09375b', padding: 5}} />
          </View>
        </View>
        <ScrollView>
        </ScrollView>
      </View>
    );
  }
}

class NavBottomItem extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text style={{color: '#fff', fontSize: 12}}>{this.props.label}</Text>
        <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>{this.props.value}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navContainer: {
    backgroundColor: '#1684e2',
    flexGrow: 0,
    width: '100%',
    paddingTop: 20
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  navTopItem: {
    flexGrow: 0,
    textAlign: 'center',
    color: 'white'
  }
});

AppRegistry.registerComponent('training', () => training);
