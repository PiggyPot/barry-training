import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  potList: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    height: 65,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  progressBar: {
    width: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3
  },
  progressBarFill: {
    width: 5,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3
  },
  itemDetails: {
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 10,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 1
  },
  itemDetailsName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#103d60'
  },
  itemDetailsStats: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemDetailsStatsAmount: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)'
  },
  itemDetailsStatsTarget: {
    fontWeight: 'bold',
    color: '#1ba0f0'
  },
  sectionHeader: {
    padding: 10,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.25)'
  },
  footer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  footerText: {
    color: '#09375b'
  }
})

export default styles;
