import { Alert, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../styles/genInput.style.js'
import LongBtn from '../../styles/longBtn.styles.js'
const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [errr, setErrr] = useState('')
  const [pop, setPop] = useState('none')
  function validate() {
    const chkAT= email.includes('@')
    const chkdot = email.includes(".")
    const chkpass = isNaN(pass)
    if (email.length>=5) {
      if (chkAT==true && chkdot==true) {
        if (chkpass==true) {
          if (pass.length>=6) {
            navigation.replace('Mainss')
          } else {
            openPop('Password too short')
          }
        } else {
          openPop('Invalid Password')
        }
      } else {
        openPop('Invalid Email')
      }
    } else {
      // setErrr()
      openPop('Email too short')
    }
  }
  function openPop(det) {
    setErrr(det)
    // console.log(errr);
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
        {/* text for the create an account  */}
        <View>
          <Text style={{
            color:'#4c484a',
            fontSize:26,
            fontWeight:'400',
            fontFamily:'Montserrat_700Bold',
            paddingHorizontal: 20,
            marginBottom:20
          }}>Welcome,</Text>
        </View>

        
        <View style={Input.body}>
          <Text style={Input.Label}>Email</Text>
          <TextInput autoComplete='email' onChangeText={setEmail} maxLength={30} keyboardType='email-address' style={Input.input} placeholder='example@email.com' />
        </View>

        <View style={Input.body}>
          <Text style={Input.Label}>Password</Text>
          <TextInput onChangeText={setPass} secureTextEntry maxLength={11} style={Input.input} placeholder='*******' />
          <Pressable onPress={()=>navigation.navigate('reset1')}>
            <Text style={{color:'purple',
                fontFamily:'Montserrat_600SemiBold',
                marginTop:5,
                alignSelf:'flex-end',

                }}>
              Forget Password?
            </Text>
          </Pressable>
        </View>
        
        <View style={LongBtn.body}>
          <TouchableOpacity onPress={validate} style={LongBtn.btn} >
            <Text style={LongBtn.label}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Pressable onPress={()=>navigation.replace('register')} >
          <Text style={{
            textAlign:'center',
            color:'#4c484a',
            fontFamily:'Montserrat_600SemiBold',
            marginTop:5
          }}>Dont have account? <Text style={{color:'purple'}}>SignIn</Text></Text>
        </Pressable>
        

      </Pressable>
    </SafeAreaView>
  )
}

export default Login

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