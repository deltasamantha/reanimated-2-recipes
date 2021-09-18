import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { BORDER_RADIUS, BORDER_RADIUS_L } from "../../theme/Dimensions";

const INDICATOR_WIDTH = 50;
const INDICATOR_HEIGHT = 8;
export const CARD_HEIGHT = 200;

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  card: {
    width: width,
    height: CARD_HEIGHT,
    backgroundColor: colors.colorInverseLight,
    borderBottomLeftRadius: BORDER_RADIUS_L,
    borderBottomRightRadius: BORDER_RADIUS_L,
    position: "absolute",
    top: -180,
  },
  dragHandle: {
    width: INDICATOR_WIDTH,
    height: INDICATOR_HEIGHT,
    backgroundColor: colors.colorPrimaryDark,
    borderRadius: BORDER_RADIUS,
    alignSelf: "center",
    position: "absolute",
    bottom: 10,
  },
});
