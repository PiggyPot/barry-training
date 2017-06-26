import _ from 'lodash';
import { createSelector } from 'reselect';
import { filter, find, reduce } from 'lodash/fp';

export const getAllPots = state => state.pots;
export const getActivePotId = state => state.activePotId

export const getActivePots = createSelector(
  getAllPots,
  filter(['status', 'ACTIVE'])
)

export const getCompletePots = createSelector(
  getAllPots,
  filter(['status', 'COMPLETE'])
)

export const getArchivedPots = createSelector(
  getAllPots,
  filter(['status', 'ARCHIVED'])
)

export const getSectionedPots = createSelector(
  getActivePots,
  getCompletePots,
  (active, complete) => {
    return [
      {title: 'ACTIVE', data: active},
      {title: 'COMPLETE', data: complete}
    ]
  }
)

export const getSummaryGoals = createSelector(
  getActivePots,
  getCompletePots,
  (active, complete) => {
    return active.length + '/' + (active.length + complete.length)
  }
)

export const getSummaryTotals = createSelector(
  getActivePots,
  getCompletePots,
  (active, complete) => {
    return reduce((total, pot) => {
      return reduce((subtotal, transaction) => {
        return transaction.status === 'COMPLETE' ? (transaction.amount + subtotal) : subtotal;
      }, 0)(pot.transactions) + total;
    }, 0)([...active, ...complete])
  }
)

export const getSummaryDeposit = createSelector(
  getActivePots,
  (active) => {
    return {
      date: new Date(),
      amount: 12.50
    }
  }
)

export const getSummaryData = createSelector(
  getSummaryGoals,
  getSummaryTotals,
  getSummaryDeposit,
  (goals, totals, deposit) => {
    return {goals, totals, deposit}
  }
)

export const getActivePot = createSelector(
  getAllPots,
  getActivePotId,
  (pots, id) => {
    return find({id})(pots)
  }
)
