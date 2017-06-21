import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: '#1684e2',
    flexGrow: 0,
    width: '100%'
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 0
  },
  nextDeposit: {
    backgroundColor: '#09375b',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#09375b',
    padding: 5
  },
})

export default styles;
