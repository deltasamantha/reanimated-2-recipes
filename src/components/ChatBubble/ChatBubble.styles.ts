import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { SPACING_S } from "../../theme/Dimensions";

const BUBBLE_SIZE = 120;
const INNER_BUBBLE_SIZE = 15;

export const styles = StyleSheet.create({
  rootContainer: {
    width: BUBBLE_SIZE,
    height: BUBBLE_SIZE,
    borderRadius: BUBBLE_SIZE / 2,
    borderBottomRightRadius: 0,
    borderWidth: 0.5,
    backgroundColor: colors.colorInverseLight,
    borderColor: colors.colorInverse,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: SPACING_S,
  },
  bubble: {
    width: INNER_BUBBLE_SIZE,
    height: INNER_BUBBLE_SIZE,
    borderRadius: INNER_BUBBLE_SIZE / 2,
    backgroundColor: colors.colorInverse,
  },
});
