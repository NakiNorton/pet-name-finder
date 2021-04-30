import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { STYLES, COLORS } from '../styles/Styles.js'


export default function PetImagePicker() {
  const [imageSource, setImageSource] = useState(null);

  return (
    <View
      style={[
        STYLES.flex,
        STYLES.centerContainer,
        { backgroundColor: COLORS.primaryDark }
      ]}
    >
      <Text style={[STYLES.title, { color: COLORS.primaryLight }]}>
        Image Picker
      </Text>
      <TouchableOpacity
        onPress={launchImageLibrary}
        style={[
          STYLES.selectButtonContainer,
          { backgroundColor: COLORS.primaryLight }
        ]}
      >
        <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
      </TouchableOpacity>
    </View>
  );
}