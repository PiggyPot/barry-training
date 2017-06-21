import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  ListView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  View
} from 'react-native';
import { Currency, List } from '../components';
import PotsSummary from './summary';
import data from '../../store.js';
import _ from 'lodash';
import styles from './styles.js';

class PotListView extends React.Component {
  static navigationOptions = {
    title: 'My Pots',
    headerStyle: {backgroundColor:'#1684e2', shadowRadius: 0, shadowOffset: {height: 0}},
    headerTitleStyle: {color:'#ffffff'}
  };

  getGoals() {
    return _.filter(data, ((x) => {return x.status === 'COMPLETE'})).length + '/' + _.filter(data, ((x) => {return x.status !== 'ARCHIVED'})).length
  }

  getPotTotals() {
    const total = data.reduce((total, pot) => {
      if(pot.status !== 'ARCHIVED')
        return pot.transactions.reduce((subTotal, transaction) => {
          if(transaction.status === 'COMPLETE')
            return transaction.amount + subTotal
          return subTotal;
        }, 0) + total;
      return total;
    }, 0)

    return <Currency value={total} />
  }

  getNextDeposit() {
    return '12'
  }

  renderRow(rowData) {
    return <PotListItem {...rowData} onPress={() => this.props.navigation.navigate('Pot')} />
  }

  renderSectionHeader(sectionData, category) {
    return <View><Text style={{padding: 10, fontWeight: 'bold', color: 'rgba(0,0,0,0.25)'}}>{category} POTS ({_.filter(data, {status: category}).length})</Text></View>
  }

  renderFooter() {
    return _.filter(data, {status: 'ARCHIVED'}).length > 0
      ? <View style={{flexDirection: 'row', justifyContent:'space-between', padding: 10, paddingLeft: 20, paddingRight: 20}}><Text style={{color: '#09375b'}}>View archived goals</Text><Text style={{color: '#09375b'}}>></Text></View>
      : null
  }

  render() {
    let sectionedData = {};
    data.map((pot) => {
      if(pot.status === 'ARCHIVED')
        return;
      if(!sectionedData[pot.status])
        sectionedData[pot.status] = [];
      sectionedData[pot.status].push(pot);
    })

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2, sectionHeaderHasChanged: (s1, s2) => s1 !== s2})

    return (
      <View style={styles.container}>
        <PotsSummary goals={this.getGoals()} potTotals={this.getPotTotals()} nextDeposit={this.getNextDeposit()} />
        <ListView
          style={styles.potList}
          dataSource={ds.cloneWithRowsAndSections(sectionedData)}
          renderRow={this.renderRow.bind(this)}
          renderSectionHeader={this.renderSectionHeader}
          renderFooter={this.renderFooter}/>
      </View>
    );
  }
}

class PotListItem extends Component {
  render() {
    const sum = _(this.props.transactions).filter({status: 'COMPLETE'}).map('amount').sum();
    const percentage = '' + (sum / this.props.savingTarget) * 100 + '%';
    const progressColour = this.props.status === 'COMPLETE' ? '#22e087' : '#f28eb1';
    const timelineText = this.props.status === 'ACTIVE'
      ? <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.5)'}}>£{this.props.transactions[0].amount} {this.props.depositInterval === 'WEEKLY' ? 'pw' : 'pm'}</Text>
      : <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.5)'}}>Saved in 2 days</Text>
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={{flexDirection: 'row', height: 65, marginBottom: 10, paddingLeft: 10, paddingRight: 10}}>
          <View style={{width: 5, backgroundColor: 'rgba(0,0,0,0.1)', justifyContent: 'flex-end', borderBottomLeftRadius: 3, borderTopLeftRadius: 3}}>
            <View style={{backgroundColor: progressColour, width: 5, height: percentage, borderBottomLeftRadius: 3, borderTopLeftRadius: 3}} />
          </View>
          <View style={{backgroundColor: '#fff', flexGrow: 1, justifyContent: 'space-between', padding: 10, borderTopRightRadius: 3, borderBottomRightRadius: 3, shadowOffset:{width: 0, height: 1}, shadowColor: 'black', shadowOpacity: 0.1, shadowRadius: 1}}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#103d60'}}>{this.props.name}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.5)'}}><Text style={{fontWeight: 'bold', color: '#1ba0f0'}}>£{sum}</Text> of £{this.props.savingTarget}</Text>
              {timelineText}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default PotListView;
