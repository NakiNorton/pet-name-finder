import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import defaultImage from '../../assets/karsten-winegeart-unsplash.jpg'
import { STYLES, COLORS } from '../styles/Styles.js'

export default function PetImagePicker() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      {!image && <Image source={defaultImage} style={{ width: 250, height: 275 }} />}
      {image && <Image source={{ uri: image }} style={{ width: 250, height: 275 }} />}
      <Button color="#D3D3D3" title="Choose image" accessibilityLabel="Select an image from your camera roll" onPress={pickImage} />
    </View>
  );
}

/* USING STYLE OBJECT
    <View
      style={[
        STYLES.flex,
        STYLES.centerContainer,
        { backgroundColor: COLORS.primaryDark }
      ]}
    >
      <Text style={[STYLES.title, { color: COLORS.primaryLight }]}>
        Simple Image Picker
      </Text>
    </View>
  );
*/