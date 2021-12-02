import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";

const BUTTON_HEIGHT = 60;
export const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    height: BUTTON_HEIGHT,
    backgroundColor: colors.colorAccent,
    alignItems: "center",
    justifyContent: "center",
  },
});
