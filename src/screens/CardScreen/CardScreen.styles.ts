import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { BORDER_RADIUS, BORDER_RADIUS_L, SPACING_S } from "../../theme/Dimensions";

const INDICATOR_WIDTH = 50;
const INDICATOR_HEIGHT = 5;
const CARD_HEIGHT = 200;
const CARD_VISIBLE_HEIGHt = 20;

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dragIndicator: {
    width: INDICATOR_WIDTH,
    height: INDICATOR_HEIGHT,
    backgroundColor: colors.colorPrimaryDark,
    borderRadius: BORDER_RADIUS,
  },
  card: {
    width: width,
    height: CARD_HEIGHT,
    backgroundColor: colors.colorInverseLight,
    borderBottomLeftRadius: BORDER_RADIUS_L,
    borderBottomRightRadius: BORDER_RADIUS_L,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: SPACING_S,
    position: "absolute",
    left: 0,
    right: 0,
    top: -(CARD_HEIGHT - CARD_VISIBLE_HEIGHt),
  },
  button: {
    backgroundColor: colors.colorAccent,
    color: colors.textColorPrimary,
  },
});
