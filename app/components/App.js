import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Header } from 'react-native-elements';
import Main from './Main'
import { mockNameData } from '../mockdata'
import { Constants } from 'react-native-unimodules';
// console.log("constants",  Constants.systemFonts);

export default function App() {
  const [ allNames, setAllNames ] = useState([])

  useEffect(() => {
    // data fetch to replace mockdata
    const allNames = mockNameData
    setAllNames(allNames)
  })

  return (
    <SafeAreaProvider>
      <Header
        placement="center"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Pet Name Finder', style: { color: '#FCA311', fontSize: 26, fontFamily: "Avenir-Light" } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{
          backgroundColor: '#14213D',
        }}
      />
      <Main allNames={allNames} />
    </SafeAreaProvider>
  );
}


