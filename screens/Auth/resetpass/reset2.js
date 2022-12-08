import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../../styles/genInput.style.js";
import LongBtn from "../../../styles/longBtn.styles.js";

const Reset2 = ({ navigation }) => {
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')
    const [errr, setErrr] = useState("");
  const [pop, setPop] = useState("none");


  function validate() {
    const ckhPass1 = isNaN(pass1)
    if (pass1.length>=6) {
        if (ckhPass1==true) {
            if (pass1==pass2) {
                navigation.popToTop()
            } else {
                openPop('Both passwords Dont match')
            }
        } else {
            openPop('Invalid password')
        }
    } else {
        openPop('Password too short')
    }
  }
  function openPop(det) {
    setErrr(det)

    setPop("flex");
    setTimeout(() => {
      setPop("none");
    }, 3000);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Pressable
        style={{ flex: 1, backgroundColor: "white" }}
        onPress={() => Keyboard.dismiss()}
      >
        {/* poppup */}
        <View
          style={{
            width: "100%",
            borderBottomColor: "#eb0000",
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignItems: "center",

            display: pop,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Montserrat_600SemiBold",
              color: "red",
            }}
          >
            {errr}
          </Text>
        </View>
        <View style={{ height: 25 }} />

        <View style={Input.body}>
          <Text style={Input.Label}>Password</Text>
          <TextInput
          secureTextEntry
            autoComplete="password-new"
            onChangeText={setPass1}
            maxLength={16}
            style={Input.input}
            placeholder="*******"
          />
        </View>

        <View style={Input.body}>
          <Text style={Input.Label}>Retype Password</Text>
          <TextInput
          secureTextEntry
            autoComplete="password-new"
            onChangeText={setPass2}
            maxLength={16}
            style={Input.input}
            placeholder="*******"
          />
        </View>
        <View style={{ height: 40 }} />

        <View style={LongBtn.body}>
          <TouchableOpacity onPress={validate} style={LongBtn.btn}>
            <Text style={LongBtn.label}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Reset2;

const styles = StyleSheet.create({
  TIbody: {
    width: "100%",
    paddingHorizontal: 21,
  },
  Label: {
    fontSize: 17,
    fontFamily: "Montserrat_600SemiBold",
    color: "#4c484a",
  },
});
