import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Header } from 'react-native-elements';
import Main from './Main'
import { Constants } from 'react-native-unimodules';
console.log("constants",  Constants.systemFonts);

export default function App() {
  return (
    <SafeAreaProvider>
      <Header
        placement="center"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Pet Name Finder', style: { color: '#FCA311', fontSize: 28, fontFamily: "Avenir-Light" } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{
          backgroundColor: '#14213D',
        }}
      />
      <Main />
    </SafeAreaProvider>
  );
}


