import React, { ReactNode } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App(): ReactNode {
  return (
    <SafeAreaProvider style={styles.rootContainer}>
      <StatusBar barStyle={"dark-content"} />
      <Text>Hi reanimated 2</Text>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
