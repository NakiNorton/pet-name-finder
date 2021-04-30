import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import PetImagePicker from './PetImagePicker.js'



const Main = () => {

  const onPressButton = () => {
    alert('You tapped the button!')
  }
  

  return (
    <View style={styles.container}>

      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Kota</Text>
      </View>

      <View style={styles.imageContainer}>
        <PetImagePicker/>
      </View>

      <Text style={styles.imageText}>Change photo</Text>

      <View style={styles.actionsContainer}>
        <TouchableWithoutFeedback onPress={onPressButton}>
          <Text>Back</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={onPressButton}>
          <Text>Save</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={onPressButton}>
          <Text>Next</Text>
        </TouchableWithoutFeedback>
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
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 42,
    color: '#FCA311',
  },
  imageContainer: {
    flex: 2.25,
    paddingTop: '10%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  imageText: { 
    textAlign: 'center', 
    color: '#fff', 
    flex: .25 
  },
  actionsContainer: {
    flex: .75,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'yellow'
  }

});

export default Main