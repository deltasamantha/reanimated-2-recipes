import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { useSpring } from "react-native-redash";
import AnimatedCard from "../../components/AnimatedCard/AnimatedCard";
import Button from "../../components/Button/Button";
import { Card } from "../../model/Card";
import { colors } from "../../theme/Colors";
import { styles } from "./TransitionsScreen.styles";

const TransitionsScreen: React.FC = () => {
  const card1: Card = { number: "1239 1112 3110 2828", color: colors.colorCard1 };
  const card2: Card = { number: "2222 1111 0000 9999", color: colors.colorCard2 };
  const card3: Card = { number: "4444 5555 6666 7777", color: colors.colorCard3 };

  const cardAnimationHandler = useCallback(() => {
    setToggle((state) => !state);
  }, []);

  const [toggled, setToggle] = useState(false);
  const transition = useSpring(toggled);

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

export default TransitionsScreen;
