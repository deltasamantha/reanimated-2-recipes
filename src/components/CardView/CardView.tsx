import React from "react";
import { View } from "react-native";
import { Card } from "../../model/Card";
import AppText from "../AppText/AppText";
import { styles } from "./CardView.styles";

interface Props {
  card: Card;
}

const CardView: React.FC<Props> = ({ card }: Props) => {
  return (
    <View style={styles.rootView}>
      <AppText type="primary" size="m" weight="semi-bold">
        {card.number}
      </AppText>
    </View>
  );
};

export default CardView;
