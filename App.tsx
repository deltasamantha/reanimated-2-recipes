import React, { ReactNode } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";

function App(): ReactNode {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
