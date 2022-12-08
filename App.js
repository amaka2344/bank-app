import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import onBoarding from "./screens/onBoarding";
import Register from "./screens/Auth/register";
import login from "./screens/Auth/login";
import Reset1 from "./screens/Auth/resetpass/resetpass";
import Reset2 from "./screens/Auth/resetpass/reset2";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavi from "./screens/mainpage/home/HomeNavi";
import Transaction from "./screens/mainpage/transction";
import CCare from "./screens/mainpage/customercare";
import ProfileNavi from "./screens/mainpage/profile/profilenavi";
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="loading"
            component={onBoarding}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="login"
            component={login}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="reset1"
            component={Reset1}
            options={{
              title: "Reset Password",
              headerStyle: { backgroundColor: "white", },
              headerTitleStyle:{
                fontFamily:'Montserrat_500Medium',
                fontSize:15
              },
              headerShadowVisible:false
            }}
          />
          <Stack.Screen
            name="reset2"
            component={Reset2}
            options={{
              title: "Reset Password",
              headerStyle: { backgroundColor: "white", },
              headerTitleStyle:{
                fontFamily:'Montserrat_500Medium',
                fontSize:15
              },
              headerShadowVisible:false
            }}
          />
      <Stack.Screen
            name="Mainss"
            component={Mainss}
            options={{
              headerShown:false
            }}
          />        
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


function Mainss() {
  return(
    <Tab.Navigator screenOptions={{headerShown:false, tabBarLabelStyle:{
      fontFamily:'Montserrat_600SemiBold'
    },tabBarActiveTintColor:'purple',tabBarInactiveTintColor:'grey'}}>
      <Tab.Screen name="homeNavi" component={HomeNavi} options={{
        title:'Home',
        tabBarIcon:({focused})=>focused?<Foundation name="home" size={24} color="purple" />:<Foundation name="home" size={24} color="black" />
      }} />
      <Tab.Screen name="transaction" component={Transaction} options={{
        title:'Transaction',
        tabBarIcon:({focused})=>focused?<FontAwesome name="money" size={24} color="purple" />:<FontAwesome name="money" size={24} color="black" />
      }} />
      <Tab.Screen name="Customer Care" component={CCare} options={{
        title:'Transaction',
        tabBarIcon:({focused})=>focused?<AntDesign name="customerservice" size={24} color="purple" />:<AntDesign name="customerservice" size={24} color="black" />
      }} />
      <Tab.Screen name="Profile" component={ProfileNavi} options={{
        title:'Transaction',
        tabBarIcon:({focused})=>focused?<FontAwesome5 name="user-alt" size={24} color="purple" />:<FontAwesome5 name="user-alt" size={24} color="black" />
      }} />
    </Tab.Navigator>
  )
}