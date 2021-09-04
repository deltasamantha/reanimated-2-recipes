import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { BORDER_HEIGHT, SPACING_M } from "../../theme/Dimensions";

export const styles = StyleSheet.create({
  rootContainer: {
    padding: SPACING_M,
    backgroundColor: colors.colorBackGround,
    borderBottomColor: colors.colorPrimaryDark,
    borderBottomWidth: BORDER_HEIGHT,
  },
});
