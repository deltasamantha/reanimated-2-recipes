import React, { ReactNode } from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { colors } from "../../theme/Colors";
import { getFontSize, getFontWeight } from "../../utils/TextUtils";

export type TextType = "primary" | "secondary";
export type TextSizeType = "s" | "m" | "l" | "l";
export type TextWeightType = "light" | "regular" | "semi-bold" | "bold";
export type TextWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;

interface Props extends TextProps {
  type?: TextType;
  size?: TextSizeType;
  weight?: TextWeightType;
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<Props> = ({
  type = "primary",
  size = "s",
  weight = "regular",
  children,
  style,
  ...rest
}: Props) => {
  return (
    <Text
      style={[
        style,
        {
          fontSize: getFontSize(size),
          fontWeight: getFontWeight(weight),
          color: type === "primary" ? colors.textColorPrimary : colors.textColorAccent,
        },
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
