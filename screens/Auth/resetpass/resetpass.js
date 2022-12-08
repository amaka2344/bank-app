import { Alert, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../../styles/genInput.style.js'
import LongBtn from '../../../styles/longBtn.styles.js'


const Reset1 = ({navigation}) => {
  const [email, setemail] = useState('')
  const [errr, setErrr] = useState('')
  const [pop, setPop] = useState('none')
  function validate() {
    const chkAT= email.includes('@')
    const chkdot = email.includes(".")
    if (email.length>=5) {
      if (chkAT==true && chkdot==true) {
        navigation.navigate('reset2')
      } else {
        setErrr('Invalid Email')
        openPop()
      }
    } else {
      setErrr('Email too short')
      openPop()
    }
  }
  function openPop() {
    setPop('flex')
    setTimeout(() => {
      setPop('none')
    }, 3000);
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <Pressable style={{flex:1, backgroundColor:'white'}} onPress={()=>Keyboard.dismiss()}>
        {/* poppup */}
        <View style={{
          width:'100%',
          borderBottomColor:'#eb0000',
          borderBottomWidth:StyleSheet.hairlineWidth,
          alignItems:'center',
          
          display:pop
        }}>
          <Text style={{
                    fontSize:17,
                    fontFamily:'Montserrat_600SemiBold',
                    color:'red',
            
          }}>{errr}</Text>

        </View>
        {/* text for the create an account  */}
        <View>
          <Text style={{
            color:'#4c484a',
            fontSize:17,
            fontWeight:'400',
            fontFamily:'Montserrat_600SemiBold',
            paddingHorizontal: 20,
            marginBottom:20,
            marginVertical:20
          }}>Start the reset password by entering information below</Text>
        </View>

        
        <View style={Input.body}>
          <Text style={Input.Label}>Email</Text>
          <TextInput autoComplete='email' onChangeText={setemail} maxLength={30} keyboardType='email-address' style={Input.input} placeholder='example@email.com' />
        </View>
          <View style={{height:40}} />
        
        <View style={LongBtn.body}>
          <TouchableOpacity onPress={validate} style={LongBtn.btn} >
            <Text style={LongBtn.label}>Continue</Text>
          </TouchableOpacity>
        </View>
       

      </Pressable>
    </SafeAreaView>
  )
}

export default Reset1

const styles = StyleSheet.create({
  TIbody:{
    width:'100%',
    paddingHorizontal:21
  },
  Label:{
    fontSize:17,
    fontFamily:'Montserrat_600SemiBold',
    color:'#4c484a',
  }
})