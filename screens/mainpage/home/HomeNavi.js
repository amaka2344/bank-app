import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './home'


const Stack = createNativeStackNavigator()
const HomeNavi = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='home' component={Home} />
    </Stack.Navigator>
  )
}

export default HomeNavi

const styles = StyleSheet.create({})