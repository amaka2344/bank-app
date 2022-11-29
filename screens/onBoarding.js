import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

const Done = ({ ...props }) => (
  <TouchableOpacity {...props} style={{
    backgroundColor:'#ad4bbe',
    right:20,
   width:100,
   height:40
  }}>
    <Text style={{ fontSize: 16, marginHorizontal: 20, textAlign:'center', paddingTop: 10 }}>Done</Text>
  </TouchableOpacity>
);

export default function LoadingPage({ navigation }) {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Onboarding
          //To handle the navigation to the Homepage if Skip is clicked
          onSkip={() => navigation.replace("register")}
          //To handle the navigation to the Homepage after Done is clicked
          onDone={() => navigation.replace("register")}
          //changing the icon done to a text
          DoneButtonComponent={Done}
          bottomBarColor="white"
          allowFontScalingText={false}
          titleStyles={{ fontFamily: "Montserrat_700Bold", fontSize: 24 }}
          subTitleStyles={{ fontFamily: "Montserrat_400Regular", fontSize: 18 }}
          pages={[
            {
              backgroundColor: "#ffff",
              image: (
                <Image
                  source={require("../assets/png1.png")}
                  style={{ height: 300, width: 300 }}
                />
              ),
              title: " We make it simple",
              subtitle:
                "Create your financial profile and achieve financial goals easily.",
            },
            {
              backgroundColor: "#ffff",
              image: (
                <Image
                  source={require("../assets/png2.png")}
                  style={{ height: 300, width: 300 }}
                />
              ),
              title: " Minimal Bank Charges",
              subtitle: "Make seamless transactions with minimal charges.",
            },
            {
              backgroundColor: "#ffff",
              image: (
                <Image
                  source={require("../assets/png3.png")}
                  style={{ height: 300, width: 300 }}
                />
              ),
              title: "Great Customer Service",
              subtitle:
                "Have your bank issues easily resolved from the comfort of your homes.",
            },
          ]}
        />
        <StatusBar style="dark" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});
