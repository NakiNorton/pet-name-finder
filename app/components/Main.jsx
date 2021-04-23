import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Name Finder</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#FCA311',
  }
});

export default Main