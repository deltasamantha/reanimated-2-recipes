import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CardScreen from "../screens/CardScreen/CardScreen";
import DragCard from "../screens/DragCard/DragCard";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import OverViewScreen from "../screens/OverViewScreen/OverViewScreen";
import PanGestureScreen from "../screens/PanGestureScreen/PanGestureScreen";
import TransitionsNewScreen from "../screens/TransitionsNewScreen/TransitionsNewScreen";
import TransitionsScreen from "../screens/TransitionsScreen/TransitionsScreen";
import { colors } from "../theme/Colors";

export type RootStackParamList = {
  Home: undefined;
  Overview: undefined;
  PanGesture: undefined;
  Transition: undefined;
  Card: undefined;
  DragCard: undefined;
  TransitionNew: undefined;
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
        <RootStack.Screen name="Transition" component={TransitionsScreen} />
        <RootStack.Screen name="Card" component={CardScreen} />
        <RootStack.Screen name="DragCard" component={DragCard} />
        <RootStack.Screen name="TransitionNew" component={TransitionsNewScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
