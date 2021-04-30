import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import PetImagePicker from './PetImagePicker.js'
import Icon from 'react-native-vector-icons/FontAwesome';


// Should put icons in a wrapper component for styling ?
// Add a styling effect to the icons when they're pressed

const Main = ({ allNames }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const iconArrowLeft = <Icon name="arrow-left" size={72} color="#fff" />;
  const iconArrowRight = <Icon name="arrow-right" size={72} color="#fff" />;
  const iconHeart = <Icon name="heart" size={72} color="#fff" />;

  console.log("current index", currentIndex)

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
    <View style={styles.container}>
   
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{allNames[currentIndex]}</Text>
      </View>

      <View style={styles.imageContainer}>
        <PetImagePicker/>
      </View>

      <View style={styles.actionsContainer}>
     
        <Pressable name="left" onPress={() => {
          setCurrentIndex((currentIndex) => currentIndex - 1)}
        }>
          {iconArrowLeft}
        </Pressable>

{/* // or use onPressOut for calling method? */}
        <Pressable onPress={onPressButton}>
          {iconHeart}  
        </Pressable>
        
        <Pressable onPress={() => {
          setCurrentIndex((currentIndex) => currentIndex + 1)
        }}>
          {iconArrowRight} 
        </Pressable>
        
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