import React from 'react';
import { SectionList, Text, TouchableWithoutFeedback, View } from 'react-native';
import _ from 'lodash';
import styles from './styles';

PotsList = (props) => {
  return(
    <SectionList
      style={styles.potList}
      sections={props.listData}
      keyExtractor={item => item.id}
      renderItem={(item) => <PotListItem nav={props.navigation} {...item} />}
      renderSectionHeader={SectionHeader}
      ListFooterComponent={() => <Footer pots={props.archivedPots} />}/>
  )
}

PotListItem = ({nav, item}) => {
  const sum = _(item.transactions).filter({status: 'COMPLETE'}).map('amount').sum();
  const percentage = '' + (sum / item.savingTarget) * 100 + '%';
  const progressColour = item.status === 'COMPLETE' ? '#22e087' : '#f28eb1';
  const timelineText = item.status === 'ACTIVE'
    ? <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.5)'}}>£{item.transactions[0].amount} {item.depositInterval === 'WEEKLY' ? 'pw' : 'pm'}</Text>
    : <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.5)'}}>Saved in 2 days</Text>

  return(
    <TouchableWithoutFeedback>
      <View style={styles.listItem}>
        <View style={styles.progressBar}>
          <View style={[styles.progressBarFill, {backgroundColor: progressColour, height: percentage}]} />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.itemDetailsName}>{item.name}</Text>
          <View style={styles.itemDetailsStats}>
            <Text style={styles.itemDetailsStatsAmount}><Text style={styles.itemDetailsStatsTarget}>£{sum}</Text> of £{item.savingTarget}</Text>
            {timelineText}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

SectionHeader = ({section}) => {
  return (
    <View><Text style={styles.sectionHeader}>{section.title} POTS ({section.data.length})</Text></View>
  )
}

Footer = ({pots}) => {
  return pots.length > 0
    ? <View style={styles.footer}><Text style={styles.footerText}>View archived goals</Text><Text style={styles.footerText}>></Text></View>
    : null
}

export default PotsList;
