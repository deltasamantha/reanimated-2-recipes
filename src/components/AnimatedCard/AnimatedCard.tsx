import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix } from "react-native-redash";
import { Card } from "../../model/Card";
import CardView from "../CardView/CardView";
import { CARD_WIDTH } from "../CardView/CardView.styles";
import { styles } from "./AnimatedCard.styles";

interface Props {
  card: Card;
  transition: Animated.SharedValue<number>;
  index: number;
}

const AnimatedCard: React.FC<Props> = ({ card, index, transition }: Props) => {
  const style = useAnimatedStyle(() => {
    const rotate = (index - 1) * mix(transition.value, 0, Math.PI / 6);
    return {
      transform: [
        { translateX: -CARD_WIDTH / 2 },
        { rotate: `${rotate}rad` },
        { translateX: CARD_WIDTH / 2 },
      ],
    };
  });
  return (
    <Animated.View style={[styles.card, style]}>
      <CardView card={card} />
    </Animated.View>
  );
};

export default AnimatedCard;
