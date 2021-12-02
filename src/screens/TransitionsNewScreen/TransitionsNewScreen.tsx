import React, { useCallback } from "react";
import { View } from "react-native";
import { useDerivedValue, useSharedValue, withSpring } from "react-native-reanimated";
import AnimatedCard from "../../components/AnimatedCard/AnimatedCard";
import Button from "../../components/Button/Button";
import { Card } from "../../model/Card";
import { colors } from "../../theme/Colors";
import { styles } from "./TransitionsNewScreen.styles";

// With reanimated 2 implementation

const TransitionsNewScreen: React.FC = () => {
  const card1: Card = { number: "1239 1112 3110 2828", color: colors.colorCard1 };
  const card2: Card = { number: "2222 1111 0000 9999", color: colors.colorCard2 };
  const card3: Card = { number: "4444 5555 6666 7777", color: colors.colorCard3 };

  const isToggled = useSharedValue<number>(0);

  const transition = useDerivedValue(() => {
    return withSpring(isToggled.value);
  }, []);

  const cardAnimationHandler = useCallback(() => {
    isToggled.value = isToggled.value === 0 ? 1 : 0;
  }, [isToggled]);

  return (
    <>
      <View style={styles.rootContainer}>
        <AnimatedCard card={card1} index={0} transition={transition} />
        <AnimatedCard card={card2} index={1} transition={transition} />
        <AnimatedCard card={card3} index={2} transition={transition} />
      </View>
      <Button title="Animate cards" onPress={cardAnimationHandler} style={styles.button} />
    </>
  );
};

export default TransitionsNewScreen;
