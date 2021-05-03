import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loginscreen from "./screens/loginscreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();
const globalStackOptions = {
  headerStyle: { backgroundColor: "#2C68ED" },
  headerTitleAlign: "center",
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={globalStackOptions}
          component={Loginscreen}
        />
        <Stack.Screen
          name="Register"
          options={globalStackOptions}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Home"
          options={globalStackOptions}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
