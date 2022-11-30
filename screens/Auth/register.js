import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const Register = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <Pressable>
        {/* higher */}
        <View>
          <Text style={{
            color:'purple',
            fontSize:25,
            fontWeight:'400',
            padding:20,
            fontFamily:'Montserrat_700Bold'

          }}>Transferly</Text>
        </View>
        <View>
          <Text style={{
            color:'#4c484a',
            fontSize:26,
            fontWeight:'400',
            fontFamily:'Montserrat_700Bold',
            paddingHorizontal: 20,
            marginBottom:20
          }}>Create an Account</Text>
        </View>
        <View>
          
        </View>
      </Pressable>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})