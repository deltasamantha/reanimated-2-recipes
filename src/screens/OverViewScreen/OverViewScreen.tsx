import React from "react";
import { View } from "react-native";
import AppText from "../../components/AppText/AppText";
import { styles } from "./OverViewScreen.styles";

const OverViewScreen: React.FC = () => {
  return (
    <View style={styles.rootContainer}>
      <AppText weight="regular" size="l" type="secondary">
        Overview
      </AppText>
    </View>
  );
};

export default OverViewScreen;
