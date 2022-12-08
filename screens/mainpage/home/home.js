import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [Name, setName] = useState("Tanko Masterblowi");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* higher */}
      <View>
        <Text style={styles.transferly}>Transferly</Text>
      </View>

      {/* user nav */}
      <View style={styles.UNav}>
        {/* left  */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../../assets/profile.png")}
            style={{ width: 35, height: 35, marginRight: 10 }}
          />
          <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: 20,
            }}
          >
            Hi, {Name.split(" ")[0]}
          </Text>
        </View>

        {/* right  */}
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell" size={24} color="#2b262b" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  transferly: {
    color: "purple",
    fontSize: 25,
    fontWeight: "400",
    padding: 20,
    fontFamily: "Montserrat_700Bold",
  },
  UNav: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
