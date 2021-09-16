import React from "react";
import { Button, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { styles } from "./CardScreen.styles";

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const CardScreen: React.FC = () => {
  const top = useSharedValue(-170);

  const style = useAnimatedStyle(() => {
    return {
      top: top.value,
    };
  });

  const onShowCard = () => {
    if (top.value === 0) {
      top.value = withSpring(-170, SPRING_CONFIG);
    } else {
      top.value = withSpring(0, SPRING_CONFIG);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <Animated.View style={[styles.card, style]}>
        <View style={{}} />

        <Animated.View style={styles.dragIndicator} />
      </Animated.View>
      <Button title="Show" onPress={onShowCard} />
    </View>
  );
};

export default CardScreen;
