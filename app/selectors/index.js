import React from 'react';
import { Text } from 'react-native';
import Currency from '../components/common';
import _ from 'lodash';

export const getSectionedPots = ({pots}) => {
  let sectionedPots = [];

  pots.map((pot) => {
    if(pot.status === 'ARCHIVED')
      return;
    if(_.filter(sectionedPots, {title:pot.status}).length === 0)
      sectionedPots.push({title: pot.status, data: [pot]})
    else
      sectionedPots[_.findIndex(sectionedPots, {status: pot.status})].data.push(pot);
  })
  return sectionedPots;
}

export const getArchivedPots = ({pots}) => {
  return _.filter(pots, {status:'ARCHIVED'})
}

export const getSummaryData = ({pots}) => {
  let summary = {};
  summary.goals = _.filter(pots, ((x) => {return x.status === 'COMPLETE'})).length + '/' + _.filter(pots, ((x) => {return x.status !== 'ARCHIVED'})).length;

  const potTotals = pots.reduce((total, pot) => {
    if(pot.status !== 'ARCHIVED')
      return pot.transactions.reduce((subTotal, transaction) => {
        if(transaction.status === 'COMPLETE')
          return transaction.amount + subTotal
        return subTotal;
      }, 0) + total;
    return total;
  }, 0);

  summary.potTotals = <Currency value={potTotals} />

  summary.nextDeposit = <Text><Currency value='12.50'/> - 13 Dec</Text>;

  return summary;
}

export const getActivePot = ({pots, activePot}) => {
  return _.filter(pots, {id: activePot})[0]
}
