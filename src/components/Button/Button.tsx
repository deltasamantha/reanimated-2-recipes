import React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import AppText from "../AppText/AppText";
import { styles } from "./Button.styles";

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<Props> = ({ title, onPress, style }: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.rootContainer, style]}>
      <AppText type="primary" size="m" weight="semi-bold">
        {title}
      </AppText>
    </Pressable>
  );
};

export default Button;
