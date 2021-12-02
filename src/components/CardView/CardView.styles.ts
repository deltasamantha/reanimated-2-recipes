import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { BORDER_RADIUS, SPACING_M, SPACING_S } from "../../theme/Dimensions";

export const CARD_WIDTH = 250;
export const CARD_HEIGHT = 150;
const SIGN_SIZE = 30;

export const styles = StyleSheet.create({
  rootView: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.colorCard1,
    padding: SPACING_S,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  sign: {
    width: SIGN_SIZE,
    height: SIGN_SIZE,
    borderRadius: SIGN_SIZE / 2,
    backgroundColor: colors.colorCardSign,
    margin: SPACING_M,
  },
});
