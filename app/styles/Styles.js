
import { StyleSheet } from 'react-native';

export const STYLES = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 4,
    backgroundColor: '#14213D',
    alignItems: 'center',
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: "5%"
  },
  nameText: {
    fontSize: 62,
    lineHeight: 72,
    color: '#FFF',
    fontFamily: "Avenir-Light",
    padding: 0,
  },
  imageContainer: {
    flex: 1.5,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: { 
    textAlign: 'center', 
    color: '#fff', 
    flex: .25 
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '2.5%',
    paddingTop: '2.5%',
  }
});