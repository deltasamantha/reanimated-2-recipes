import React, { ReactNode } from "react";
import { StatusBar } from "react-native";
import "react-native-reanimated";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";

function App(): ReactNode {
  return (
    // <GestureHandlerRootView>
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <RootNavigator />
    </SafeAreaProvider>
    // </GestureHandlerRootView>
  );
}

export default App;
