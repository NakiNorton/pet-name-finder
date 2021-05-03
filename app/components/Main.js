import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import PetImagePicker from './PetImagePicker.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import { STYLES } from '../styles/Styles'


const Main = ({ allNames }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)

  // functionality for saving a name will go here
  const onPressButton = (e) => {
    console.log(e)
    alert('You tapped the button!')
  }

  useEffect(() => {
    // if current index is -1 start looping backward through array
    // if index is the last element in the array then restart from 0
    if (currentIndex === -1) {
      setCurrentIndex(allNames.length -1)
    }

    if (currentIndex === allNames.length) {
      setCurrentIndex(0)
    }
  })

  
  return (
    <View style={STYLES.container}>

      <View style={STYLES.nameContainer}>
        <Text style={STYLES.nameText}>{allNames[currentIndex]}</Text>
      </View>
  
      <View style={STYLES.imageContainer}>
        <PetImagePicker/>
      </View>

      <View style={STYLES.actionsContainer}>
        <Pressable 
          name="left" 
          onPress={() => setCurrentIndex((currentIndex) => currentIndex - 1)} 
          style={({pressed}) => [{ opacity: pressed ? 0.5 : 1 }]} 
        >
          <Icon name="arrow-left" size={72} color="#FFF" />
        </Pressable>

        <Pressable 
          onPress={onPressButton} 
          style={({pressed}) => [{ opacity: pressed ? .5 : 1 }]}
        >
          <Icon name="heart" size={72} color="#FCA311" /> 
        </Pressable>
        
        <Pressable 
          onPress={() => setCurrentIndex((currentIndex) => currentIndex + 1)} style={({pressed}) => [{ opacity: pressed ? .5 : 1}]} 
        >
          <Icon name="arrow-right" size={72} color="#FFF" /> 
        </Pressable>
      </View>
    </View>
  );
}




export default Main