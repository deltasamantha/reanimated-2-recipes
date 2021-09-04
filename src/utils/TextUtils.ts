import { TextSizeType, TextWeight, TextWeightType } from "../components/AppText/AppText";
import {
  FONT_SIZE_L,
  FONT_SIZE_M,
  FONT_SIZE_S,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_LIGHT,
  FONT_WEIGHT_REGULAR,
  FONT_WEIGHT_SEMI_BOLD,
} from "../theme/Typography";

export function getFontSize(size: TextSizeType): number {
  switch (size) {
    case "s":
      return FONT_SIZE_S;
    case "m":
      return FONT_SIZE_M;
    case "l":
      return FONT_SIZE_L;
  }
}

export function getFontWeight(weight: TextWeightType): TextWeight {
  switch (weight) {
    case "light":
      return FONT_WEIGHT_LIGHT;
    case "regular":
      return FONT_WEIGHT_REGULAR;
    case "semi-bold":
      return FONT_WEIGHT_SEMI_BOLD;
    case "bold":
      return FONT_WEIGHT_BOLD;
  }
}
