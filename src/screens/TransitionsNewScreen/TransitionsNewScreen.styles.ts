import { StyleSheet } from "react-native";
import { SPACING_M } from "../../theme/Dimensions";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: SPACING_M,
  },
  button: {
    alignSelf: "flex-start",
    marginBottom: SPACING_M,
  },
});
