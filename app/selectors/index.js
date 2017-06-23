import { ListView } from 'react-native';
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
