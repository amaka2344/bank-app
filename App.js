import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import onBoarding from "./screens/onBoarding";
import Register from "./screens/Auth/register";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="loading"
            component={onBoarding}
            options={{ header: () => null }}
          />
           <stack.Screen
            name="register"
            component={Register}
            options={{ header: () => null }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


