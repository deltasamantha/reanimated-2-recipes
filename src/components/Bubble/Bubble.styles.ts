import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";

const INNER_BUBBLE_SIZE = 10;

export const styles = StyleSheet.create({
  rootContainer: {
    width: INNER_BUBBLE_SIZE,
    height: INNER_BUBBLE_SIZE,
    borderRadius: INNER_BUBBLE_SIZE / 2,
    backgroundColor: colors.colorInverse,
  },
});
