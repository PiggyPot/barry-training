import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
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
  separator: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 1,
    height: '75%'
  },
  itemTop: {
    color: '#fff',
    fontSize: 12
  },
  itemBottom: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
})

export default styles;
