import React from "react";
import { View } from "react-native";
import AppText from "../../components/AppText/AppText";
import { styles } from "./TransitionsScreen.styles";

const TransitionsScreen: React.FC = () => {
  return (
    <View style={styles.rootContainer}>
      <AppText weight="regular" size="l" type="secondary">
        Transition
      </AppText>
    </View>
  );
};

export default TransitionsScreen;
