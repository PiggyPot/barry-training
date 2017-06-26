const initialState = {
  activePotId: 1,
  pots: [
  {
    id: 1,
    name: 'A new pot',
    status: 'ACTIVE',
    savingTarget: 12000,
    dateTarget: 1497867542473,
    depositInterval: 'WEEKLY',
    transactions: [
      {
        id: 1,
        amount: 2000,
        status: 'COMPLETE',
        type: 'DEPOSIT',
        date: 1497867542473,
      },
      {
        id: 2,
        amount: 2000,
        status: 'COMPLETE',
        type: 'DEPOSIT',
        date: 14978675424730,
      },
      {
        id: 3,
        amount: 2000,
        status: 'PENDING',
        type: 'DEPOSIT',
        date: 14978675424730,
      },
      {
        id: 4,
        amount: 2000,
        status: 'PENDING',
        type: 'DEPOSIT',
        date: 14978675424730,
      },
      {
        id: 5,
        amount: 2000,
        status: 'PENDING',
        type: 'DEPOSIT',
        date: 14978675424730,
      },
      {
        id: 6,
        amount: 2000,
        status: 'PENDING',
        type: 'DEPOSIT',
        date: 14978675424730,
      }
    ]
  },
  {
    id: 2,
    name: 'Another Pot',
    status: 'COMPLETE',
    savingTarget: 10000,
    dateTarget: 1497867542473,
    depositInterval: 'WEEKLY',
    transactions: [
      {
        id: 1,
        amount: 2500,
        status: 'COMPLETE',
        type: 'DEPOSIT',
        date: 1497867542473,
      },
      {
        id: 2,
        amount: 2500,
        status: 'COMPLETE',
        type: 'DEPOSIT',
        date: 14978675424730,
      },
      {
        id: 4,
        amount: 2500,
        status: 'COMPLETE',
        type: 'DEPOSIT',
        date: 14978675424730,
      },
      {
        id: 5,
        amount: 2500,
        status: 'COMPLETE',
        type: 'DEPOSIT',
        date: 14978675424730,
      }
    ]
  },
  {
    id: 3,
    name: 'Another Pot 2',
    status: 'ARCHIVED',
    savingTarget: 20000,
    dateTarget: 1497867542473,
    depositInterval: 'WEEKLY',
    transactions: [
      {
        id: 1,
        amount: 5000,
        status: 'COMPLETE',
        type: 'DEPOSIT',
        date: 1497867542473,
      },
      {
        id: 2,
        amount: 5000,
        status: 'COMPLETE',
        type: 'DEPOSIT',
        date: 14978675424730,
      },
      {
        id: 4,
        amount: 5000,
        status: 'COMPLETE',
        type: 'DEPOSIT',
        date: 14978675424730,
      },
      {
        id: 5,
        amount: 5000,
        status: 'PENDING',
        type: 'DEPOSIT',
        date: 14978675424730,
      }
    ]
  }
]}

export default function pots(state = initialState, action) {
  switch(action.type) {
    case 'SET_ACTIVE_POT':
      return {
        ...state,
        activePot: action.id
      }
    default:
      return state;
  }
}
