import React from "react";
import { Button, View } from "react-native";
import { runOnJS, runOnUI } from "react-native-reanimated";
import AppText from "../../components/AppText/AppText";
import { styles } from "./OverViewScreen.styles";

const OverViewScreen: React.FC = () => {
  function someWorklet(greeting: string) {
    "worklet";
    console.log(greeting, "From the UI thread");
  }

  function someWorkletWithFunction(greeting: () => void) {
    "worklet";
    console.log(greeting, "From the UI thread with func");
    runOnJS(greeting)();
  }

  function onPress() {
    runOnUI(someWorklet)("Howdy");
  }

  function onPressPassFunc() {
    runOnUI(someWorkletWithFunction)(() => console.log("Pass a func"));
  }

  return (
    <View style={styles.rootContainer}>
      <AppText weight="regular" size="l" type="secondary">
        Overview
      </AppText>
      <Button title="Execute pass text" onPress={onPress} />
      <Button title="Execute pass function" onPress={onPressPassFunc} />
    </View>
  );
};

export default OverViewScreen;
