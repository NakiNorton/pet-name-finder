import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import PetImagePicker from './PetImagePicker.js'
import Icon from 'react-native-vector-icons/FontAwesome';




const Main = () => {
  const iconArrowLeft = <Icon name="arrow-left" size={72} color="#fff" />;
  const iconArrowRight = <Icon name="arrow-right" size={72} color="#fff" />;
  const iconHeart = <Icon name="heart" size={72} color="#fff" />;


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

      <View style={styles.actionsContainer}>
     
        <TouchableWithoutFeedback onPress={onPressButton}>
          {iconArrowLeft} 
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={onPressButton}>
          {iconHeart}  
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback onPress={onPressButton}>
          {iconArrowRight} 
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
    // backgroundColor: '',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '2.5%',
    paddingTop: '2.5%',
  }

});

export default Main