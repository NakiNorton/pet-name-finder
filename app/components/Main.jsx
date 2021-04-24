import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Main = () => {
  return (
    <View style={styles.container}>

      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Kota</Text>
      </View>

      <View style={styles.imageContainer}>
        <Text>Images goes here</Text>
      </View>

      <Text style={styles.imageText}>Change photo</Text>

      <View style={styles.actionsContainer}>
        <Text>Actions go here</Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 4,
    backgroundColor: '#14213D',
    alignItems: 'center',
  },
  nameContainer: {
    flex: .75,
    width: '100%',
    border: '1px solid yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 42,
    color: '#FCA311',
  },
  imageContainer: {
    flex: 2.5,
    width: '60%',
    justifyItems: 'center',
    alignItems: 'center',
    border: '1px solid red'
  },
  imageText: { 
    textAlign: 'center', 
    color: '#fff', 
    flex: .25 
  },
  actionsContainer: {
    flex: .5,
    width: '100%',
    border: '1px solid yellow'
  }

});

export default Main