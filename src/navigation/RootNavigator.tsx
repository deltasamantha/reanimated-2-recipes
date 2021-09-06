import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import OverViewScreen from "../screens/OverViewScreen/OverViewScreen";
import PanGestureScreen from "../screens/PanGestureScreen/PanGestureScreen";
import { colors } from "../theme/Colors";

export type RootStackParamList = {
  Home: undefined;
  Overview: undefined;
  PanGesture: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTintColor: colors.textColorPrimary,
          headerStyle: { backgroundColor: colors.colorPrimary },
        }}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Overview" component={OverViewScreen} />
        <RootStack.Screen name="PanGesture" component={PanGestureScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
