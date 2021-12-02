import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Card } from "../../model/Card";
import { colors } from "../../theme/Colors";
import AppText from "../AppText/AppText";
import { styles } from "./CardView.styles";

interface Props {
  card: Card;
  style?: StyleProp<ViewStyle>;
}

const CardView: React.FC<Props> = ({ card, style }: Props) => {
  return (
    <View style={[styles.rootView, { backgroundColor: card.color || colors.colorCard1 }, style]}>
      <AppText type="primary" size="m" weight="semi-bold">
        {card.number}
      </AppText>
      <View style={styles.sign} />
    </View>
  );
};

export default CardView;
