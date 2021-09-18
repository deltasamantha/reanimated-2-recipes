import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { BORDER_RADIUS, SPACING_S } from "../../theme/Dimensions";

export const CARD_WIDTH = 250;
export const CARD_HEIGHT = 150;

export const styles = StyleSheet.create({
  rootView: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.colorInverse,
    padding: SPACING_S,
    justifyContent: "center",
  },
});
